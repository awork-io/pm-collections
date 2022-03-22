export interface IProxyConfig {
    match?: string;
    host?: string;
    port?: number;
    tunnel?: boolean;
    disabled?: boolean;
}