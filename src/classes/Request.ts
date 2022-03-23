import { IAuth } from "../types/auth-interface";
import { IBody } from "../types/body-interface";
import { ICertificate } from "../types/certificate-interface";
import { IKeyValue } from "../types/key-value-interface";
import { IProxyConfig } from "../types/proxy-config-interface";
import { IRequest, RequestMethod } from "../types/request-interface";
import { IResponse } from "../types/response-interface";
import { IUrl } from "../types/url-interface";
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
    if (obj instanceof Request || !this.validate(obj)) return obj;
    return new Request(obj);
  }
  static validate(obj: any) {
    return !!(
      obj &&
      (obj.url ||
        obj.auth ||
        obj.proxy ||
        obj.certificate ||
        obj.method ||
        obj.header ||
        obj.body ||
        obj.response ||
        obj.protocolProfileBehavior)
    );
  }
}
