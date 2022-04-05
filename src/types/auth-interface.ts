export interface IAuth {
  type: string | AuthType;
}

export enum AuthType {
  apikey = "apikey",
  awsv4 = "awsv4",
  basic = "basic",
  bearer = "bearer",
  digest = "digest",
  edgegrid = "edgegrid",
  hawk = "hawk",
  noauth = "noauth",
  oauth1 = "oauth1",
  oauth2 = "oauth2",
  ntlm = "ntlm",
}
