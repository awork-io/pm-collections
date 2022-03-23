export interface ICookie {
    domain: string;
    expires?: string;
    maxAge?: string;
    hostOnly?: boolean;
    httpOnly?: boolean;
    name?: string;
    path: string;
    secure?: boolean;
    session?: boolean;
    value?: string;
    extensions?: any;
}