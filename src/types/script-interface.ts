import { Url } from "../classes/Url";
import { IUrl } from "./url-interface";

export interface IScript {
  id?: string;
  type?: string;
  exec?: string | string[];
  src?: string | IUrl | Url;
  name?: string;
}
