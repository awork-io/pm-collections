import { IKeyValue } from "../interfaces/key-value-interface";
import { IUrl } from "../interfaces/url-interface";
import { IVariable } from "../interfaces/variable-interface";
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
        this.variable = options.variable;
    }

    static resolve(obj: any) {
        return this.isUrl(obj) ? new Url(obj) : obj;
    }

    static isUrl(obj: any) {
        return obj.variable && (obj.raw || obj.protocol || obj.host || obj.port || obj.query || obj.hash);
    } 
}