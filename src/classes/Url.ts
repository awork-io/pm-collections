import { IKeyValue } from "../types/key-value-interface";
import { IUrl } from "../types/url-interface";
import { IVariable } from "../types/variable-interface";
import { QueryParam } from "./QueryParam";
import { Variable, VariableList } from "./Variable";

export class Url implements IUrl {
    raw?: string | undefined;
    protocol?: string | undefined;
    host?: string | string[] | undefined;
    port?: string | undefined;
    query?: IKeyValue[] | QueryParam[] | undefined;
    hash?: string | undefined;
    variable: IVariable[] | Variable[] | VariableList;

    constructor(options: IUrl) {
        this.raw = options.raw;
        this.protocol = options.protocol;
        this.host = options.host;
        this.port = options.port;
        this.query = options.query?.map((q) => QueryParam.resolve(q));
        this.hash = options.hash;
        this.variable = VariableList.resolve(options.variable);
    }

    static resolve(obj: any) {
        if (obj instanceof Url || !this.validate(obj))
            return obj;
        return new Url(obj);
    }
    static validate(obj: any) {
        return !!(obj && (
            obj.variable ||
            obj.raw ||
            obj.protocol ||
            obj.host ||
            obj.port ||
            obj.query ||
            obj.hash
        ));
    } 
}