import { Cookie } from "../classes/Cookie";
import { Header, HeaderList } from "../classes/Header";
import { IBody } from "./body-interface";
import { ICookie } from "./cookie-interface";
import { IKeyValue } from "./key-value-interface";
import { IRequest } from "./request-interface";

export interface IResponse {
    id?: string;
    originalRequest?: IRequest | Request;
    responseTime?: string | number;
    timings?: any;
    header?: IKeyValue[] | Header[] | HeaderList[];
    cookie?: ICookie[] | Cookie[];
    body?: IBody;
    status?: string;
    code?: number;
}