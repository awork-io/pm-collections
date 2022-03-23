import { QueryParam } from "../classes/QueryParam";
import { Variable, VariableList } from "../classes/Variable";
import { IBaseProperty } from "./base-property-interface";
import { IKeyValue } from "./key-value-interface";
import { IVariable } from "./variable-interface";

export interface IUrl {
  raw?: string;
  protocol?: string;
  host?: string | string[];
  port?: string;
  query?: IKeyValue[] | QueryParam[];
  hash?: string;
  variable: IVariable[] | Variable[] | VariableList;
}
