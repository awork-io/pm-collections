import { IDescription } from "./description-interface";

export interface IVariable {
    id?: string;
    key?: string;
    value?: string;
    type?: VariableType;
    name?: string;
    description?: IDescription;
    system?: boolean;
    disabled?: boolean;
}

enum VariableType {
    "string",
    "boolean",
    "any",
    "number"
}