import { IDescription } from "../interfaces/description-interface";
import { IKeyValue } from "../interfaces/key-value-interface";
import { Description } from "./Description";

export class QueryParam implements IKeyValue {
    key: string;
    value: string;
    disabled?: boolean | undefined;
    description?: string | IDescription | Description | undefined;

    constructor(options: IKeyValue) {
        this.key = options.key;
        this.value = options.value;
        this.disabled = options.disabled;
        this.description = Description.resolve(options.description);
    }

    static resolve(obj: any) {
        return this.isQueryParam(obj) ? new QueryParam(obj) : obj;
    }

    static isQueryParam(obj: any) {
        return obj.key && obj.value;
    } 
}