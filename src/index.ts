import PingCommand from "@saltcute/kasumi-ping";
import StatusCommand from "@saltcute/kasumi-status";
import Kasumi, { BaseMenu, BaseSession, CommandFunction } from "kasumi.js";

class EssentialMenu extends BaseMenu {
    constructor(name: string = "essential") {
        super();
        this.name = name;
    }

    init(client: Kasumi<any>, loggerSequence: string[]) {
        super.init(client, loggerSequence);
        this.load(new PingCommand(), new StatusCommand());
    }
}

export default EssentialMenu;