import { IVariable, VariableType } from "../types/variable-interface";
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

    static resolve(obj: any) {
        if (obj instanceof Variable || !this.validate(obj))
            return obj;
        return new Variable(obj);
    }
    static validate(obj: any) {
        return !!(obj && (
            obj.key ||
            obj.value ||
            obj.type ||
            obj.system
        ));
    }
}

export class VariableList extends PropertyList<Variable> {
    constructor(list: (IVariable | Variable)[]) {
        super(list.map(variableLike => new Variable(variableLike)));
    }

    static resolve(arr: any) {
        if (arr instanceof VariableList || !this.validate(arr))
            return arr;
        return new VariableList(arr);
    }
    static validate(arr: any) {
        return !!(arr &&
            arr.every((obj: any) => Variable.validate(obj)));
    }
}