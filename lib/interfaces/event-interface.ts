import { Script } from "../classes/Script";
import { IScript } from "./script-interface";

export interface IEvent {
    id?: string;
    listen: string;
    script?: IScript | Script;
    disabled?: boolean;
}