import { IAuth } from "../interfaces/auth-interface";
import { IBody } from "../interfaces/body-interface";
import { ICertificate } from "../interfaces/certificate-interface";
import { IKeyValue } from "../interfaces/key-value-interface";
import { IProxyConfig } from "../interfaces/proxy-config-interface";
import { IRequest, RequestMethod } from "../interfaces/request-interface";
import { IResponse } from "../interfaces/response-interface";
import { IUrl } from "../interfaces/url-interface";
import { Auth } from "./Auth";
import { Body } from "./Body";
import { Header, HeaderList } from "./Header";
import { Response } from "./Response";
import { Url } from "./Url";

export class Request implements IRequest {
    url?: string | IUrl | Url;
    auth?: IAuth | Auth;
    proxy?: IProxyConfig;
    certificate?: ICertificate;
    method?: RequestMethod;
    header?: IKeyValue[] | Header[] | HeaderList;
    body?: IBody | Body;
    response?: IResponse | Response;
    protocolProfileBehavior?: any;

    constructor(options: IRequest) {
        this.url = Url.resolve(options.url);
        this.auth = options.auth;
        this.proxy = options.proxy;
        this.certificate = options.certificate;
        this.method = options.method;
        this.header = Header.resolve(options.header);
        this.body = Body.resolve(options.body);
        this.response = Response.resolve(options.response);
        this.protocolProfileBehavior = options.protocolProfileBehavior;
    }

    static resolve(obj: any) {
        if (obj instanceof Request || !this.validate(obj))
            return obj;
        return new Request(obj);
    }
    static validate(obj: any) {
        return obj.url ||
            obj.auth ||
            obj.proxy ||
            obj.certificate ||
            obj.method ||
            obj.header ||
            obj.body ||
            obj.response ||
            obj.protocolProfileBehavior;
    }
}