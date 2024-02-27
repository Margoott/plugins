import { logger } from "@vendetta";
import Settings from "./Settings";

export default {
    onLoad: () => {
        logger.log("Buttplug plugin loaded!");
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
    },
    settings: Settings,
}