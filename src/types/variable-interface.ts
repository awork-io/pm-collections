import { IProperty } from "./property-interface";

export interface IVariable extends IProperty {
  key?: string;
  value?: string;
  type?: string | VariableType;
  system?: boolean;
}

export enum VariableType {
  string = "string",
  boolean = "boolean",
  any = "any",
  number = "number",
}
