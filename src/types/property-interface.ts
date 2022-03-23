import { IBaseProperty } from "./base-property-interface";

export interface IProperty extends IBaseProperty {
  id?: string;
  name?: string;
  disabled?: boolean;
}
