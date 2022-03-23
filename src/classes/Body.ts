import { BodyMode, IBody } from "../types/body-interface";

export class Body implements IBody {
  mode?: string | BodyMode;
  raw?: string;
  graphql?: any;
  urlencoded?: any;
  formdata?: any;
  file?: any;
  options?: any;
  disabled?: boolean;

  constructor(options: IBody) {
    this.mode = options.mode;
    this.raw = options.raw;
    this.graphql = options.graphql;
    this.urlencoded = options.urlencoded;
    this.formdata = options.formdata;
    this.file = options.file;
    this.options = options.options;
    this.disabled = options.disabled;
  }

  static resolve(obj: any) {
    if (obj instanceof Body || !this.validate(obj)) return obj;
    return new Body(obj);
  }
  static validate(obj: any) {
    return !!(
      obj &&
      (obj.mode ||
        obj.raw ||
        obj.graphql ||
        obj.urlencoded ||
        obj.formdata ||
        obj.file ||
        obj.options ||
        obj.disabled)
    );
  }
}
