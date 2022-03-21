export interface IVariable {
    id?: string;
    key?: string;
    value?: string;
    type?: VariableType;
    name?: string;
    description?: any;
    system?: boolean;
    disabled?: boolean;
}

enum VariableType {
    "string",
    "boolean",
    "any",
    "number"
}