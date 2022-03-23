import { IDescription } from "../types/description-interface";
import { IKeyValue } from "../types/key-value-interface";
import { Description } from "./Description";
import { PropertyList } from "./PropertyList";

export class Header implements IKeyValue {
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
    if (obj instanceof Header || !this.validate(obj)) return obj;
    return new Header(obj);
  }
  static validate(obj: any) {
    return !!(obj && obj.key && obj.value);
  }
}
export class HeaderList extends PropertyList<Header> {
  constructor(list: (IKeyValue | Header)[]) {
    super(list.map(headerLike => Header.resolve(headerLike)));
  }

  static resolve(arr: any) {
    if (arr instanceof HeaderList || !this.validate(arr)) return arr;
    return new HeaderList(arr);
  }
  static validate(arr: any) {
    return !!(arr && arr.every((obj: any) => Header.validate(obj)));
  }
}
