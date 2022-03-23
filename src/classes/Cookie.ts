import { ICookie } from "../types/cookie-interface";

export class Cookie implements ICookie {
    domain: string;
    expires?: string | undefined;
    maxAge?: string | undefined;
    hostOnly?: boolean | undefined;
    httpOnly?: boolean | undefined;
    name?: string | undefined;
    path: string;
    secure?: boolean | undefined;
    session?: boolean | undefined;
    value?: string | undefined;
    extensions?: any;

    constructor(options: ICookie) {
        this.domain = options.domain;
        this.expires = options.expires;
        this.maxAge = options.maxAge;
        this.hostOnly = options.hostOnly;
        this.httpOnly = options.httpOnly;
        this.name = options.name;
        this.path = options.path;
        this.secure = options.secure;
        this.session = options.session;
        this.value = options.value;
        this.extensions = options.extensions;
    }

    static resolve(obj: any) {
        if (obj instanceof Cookie || !this.validate(obj))
            return obj;
        return new Cookie(obj);
    }
    static validate(obj: any) {
        return !!(obj && (
            obj.domain ||
            obj.expires ||
            obj.maxAge ||
            obj.hostOnly ||
            obj.httpOnly ||
            obj.name || 
            obj.path ||
            obj.secure ||
            obj.session ||
            obj.value ||
            obj.extensions
        ));
    } 
}