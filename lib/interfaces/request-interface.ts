import { Auth } from "../classes/Auth";
import { Header, HeaderList } from "../classes/Header";
import { Response } from "../classes/Response";
import { Url } from "../classes/Url";
import { IAuth } from "./auth-interface";
import { IBody } from "./body-interface";
import { ICertificate } from "./certificate-interface";
import { IDescription } from "./description-interface";
import { IHeader } from "./header-interface";
import { IProxyConfig } from "./proxy-config-interface";
import { IUrl } from "./url-interface";

export interface IRequest {
    url?: string | IUrl | Url;
    auth?: IAuth | Auth;
    proxy?: IProxyConfig;
    certificate?: ICertificate;
    method?: RequestMethod;
    description?: IDescription;
    header?: string | IHeader[] | Header[] | HeaderList;
    body?: IBody;
    response?:  | Response;
    protocolProfileBehavior?: any;
}

enum RequestMethod {
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