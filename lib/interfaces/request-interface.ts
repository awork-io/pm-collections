import { Auth } from "../classes/Auth";
import { Header, HeaderList } from "../classes/Header";
import { Response } from "../classes/Response";
import { Url } from "../classes/Url";
import { IAuth } from "./auth-interface";
import { IBaseProperty } from "./base-property-interface";
import { IBody } from "./body-interface";
import { ICertificate } from "./certificate-interface";
import { IKeyValue } from "./key-value-interface";
import { IProxyConfig } from "./proxy-config-interface";
import { IResponse } from "./response-interface";
import { IUrl } from "./url-interface";

export interface IRequest extends IBaseProperty {
    url?: string | IUrl | Url;
    auth?: IAuth | Auth;
    proxy?: IProxyConfig;
    certificate?: ICertificate;
    method?: RequestMethod;
    header?: IKeyValue[] | Header[] | HeaderList;
    body?: IBody | Body;
    response?: IResponse | Response;
    protocolProfileBehavior?: any;
}

export enum RequestMethod {
    "GET",
    "PUT",
    "POST",
    "PATCH",
    "DELETE",
    "COPY",
    "HEAD",
    "OPTIONS",
    "LINK",
    "UNLINK",
    "PURGE",
    "LOCK",
    "UNLOCK",
    "PROPFIND",
    "VIEW"
}