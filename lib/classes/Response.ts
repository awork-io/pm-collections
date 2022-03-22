import { IBody } from "../interfaces/body-interface";
import { ICookie } from "../interfaces/cookie-interface";
import { IKeyValue } from "../interfaces/key-value-interface";
import { IRequest } from "../interfaces/request-interface";
import { IResponse } from "../interfaces/response-interface";
import { Body } from "./Body";
import { Cookie } from "./Cookie";
import { Header, HeaderList } from "./Header";

export class Response implements IResponse {
    id?: string;
    originalRequest?: IRequest | Request;
    responseTime?: string | number;
    timings?: any;
    header?: IKeyValue[] | Header[] | HeaderList[];
    cookie?: ICookie[] | Cookie[];
    body?: IBody;
    status?: string;
    code?: number;

    constructor(options: IResponse) {
        this.id = options.id;
        this.originalRequest = options.originalRequest;
        this.responseTime = options.responseTime;
        this.timings = options.timings;
        this.header = HeaderList.resolve(options.header);
        this.cookie = options.cookie?.map((c) => Cookie.resolve(c));
        this.body = Body.resolve(options.body);
        this.status = options.status;
        this.code = options.code;
    }

    static resolve(obj: any) {
        if (obj instanceof Response || !this.validate(obj))
            return obj;
        return new Response(obj);
    }
    static validate(obj: any) {
        return obj.id ||
            obj.originalRequest ||
            obj.responseTime ||
            obj.timings ||
            obj.header ||
            obj.cookie ||
            obj.body ||
            obj.status ||
            obj.code;
    }
}