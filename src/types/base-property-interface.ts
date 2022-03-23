import { Description } from "../classes/Description";
import { IDescription } from "./description-interface";

export interface IBaseProperty {
  description?: string | IDescription | Description;
}
