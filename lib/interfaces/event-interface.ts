import { Script } from "../classes/Script";
import { IProperty } from "./property-interface";
import { IScript } from "./script-interface";

export interface IEvent extends IProperty {
    listen: string;
    script?: IScript | Script;
}