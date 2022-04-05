export interface IBody {
  mode?: string | BodyMode;
  raw?: string;
  graphql?: any;
  urlencoded?: any;
  formdata?: any;
  file?: any;
  options?: any;
  disabled?: boolean;
}

export enum BodyMode {
  raw = "raw",
  urlencoded ="urlencoded",
  formdata = "formdata",
  file = "file",
  graphql = "graphql",
}
