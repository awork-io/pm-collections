export interface IAuth {
    type: AuthType,
}

export enum AuthType {
    "apikey",
    "awsv4",
    "basic",
    "bearer",
    "digest",
    "edgegrid",
    "hawk",
    "noauth",
    "oauth1",
    "oauth2",
    "ntlm"
}