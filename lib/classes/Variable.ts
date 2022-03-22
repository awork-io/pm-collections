import { IVariable, VariableType } from "../interfaces/variable-interface";
import { PropertyList } from "./PropertyList";
export class Variable implements IVariable {
    key?: string;
    value?: string;
    type?: VariableType;
    system?: boolean;

    constructor(options: IVariable) {
        this.key = options.key;
        this.value = options.value;
        this.type = options.type;
        this.system = options.system;
    }
}

export class VariableList extends PropertyList<Variable> {
    constructor(list: IVariable[] | Variable[]) {
        super(list.map(variableLike => new Variable(variableLike)));
    }
}