import { IFolder } from "./folder-interface";
import { IInformation } from "./information-interface";

export interface ICollection extends IFolder {
    info?: IInformation;
    protocolProfileBehavior?: any;
}