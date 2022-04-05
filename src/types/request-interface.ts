import { Auth } from "../classes/Auth";
import { Description } from "../classes/Description";
import { Header, HeaderList } from "../classes/Header";
import { Response } from "../classes/Response";
import { Url } from "../classes/Url";
import { IAuth } from "./auth-interface";
import { IBaseProperty } from "./base-property-interface";
import { IBody } from "./body-interface";
import { ICertificate } from "./certificate-interface";
import { IDescription } from "./description-interface";
import { IKeyValue } from "./key-value-interface";
import { IProxyConfig } from "./proxy-config-interface";
import { IResponse } from "./response-interface";
import { IUrl } from "./url-interface";

export interface IRequest extends IBaseProperty {
  url?: string | IUrl | Url;
  auth?: IAuth | Auth;
  proxy?: IProxyConfig;
  certificate?: ICertificate;
  method?: string | RequestMethod;
  header?: IKeyValue[] | Header[] | HeaderList;
  body?: IBody | Body;
  response?: IResponse | Response;
  protocolProfileBehavior?: any;
  description: string | IDescription | Description;
}

export enum RequestMethod {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE",
  COPY = "COPY",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
  LINK = "LINK",
  UNLINK = "UNLINK",
  PURGE = "PURGE",
  LOCK = "LOCK",
  UNLOCK = "UNLOCK",
  PROPFIND = "PROPFIND",
  VIEW = "VIEW",
}
