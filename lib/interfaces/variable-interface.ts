import { IProperty } from "./property-interface";

export interface IVariable extends IProperty {
    key?: string;
    value?: string;
    type?: VariableType;
    system?: boolean;
}

export enum VariableType {
    "string",
    "boolean",
    "any",
    "number"
}