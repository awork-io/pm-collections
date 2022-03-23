export interface IBody {
  mode?: BodyMode;
  raw?: string;
  graphql?: any;
  urlencoded?: any;
  formdata?: any;
  file?: any;
  options?: any;
  disabled?: boolean;
}

export enum BodyMode {
  "raw",
  "urlencoded",
  "formdata",
  "file",
  "graphql",
}
