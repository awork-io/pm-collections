import { IDescription } from "../types/description-interface";
import { IKeyValue } from "../types/key-value-interface";
import { Description } from "./Description";

export class QueryParam implements IKeyValue {
  key: string;
  value: string;
  disabled?: boolean | undefined;
  description?: string | IDescription | Description | undefined;

  constructor(options: IKeyValue) {
    this.key = options.key;
    this.value = options.value;
    this.disabled = options.disabled;
    this.description = Description.resolve(options.description);
  }

  static resolve(obj: any) {
    if (obj instanceof QueryParam || !this.validate(obj)) return obj;
    return new QueryParam(obj);
  }
  static validate(obj: any) {
    return !!(obj && obj.key && obj.value);
  }
}
