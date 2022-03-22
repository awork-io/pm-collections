import { Variable } from "../classes/Variable";
import { IDescription } from "./description-interface";

export interface IUrl {
    raw?: string;
    protocol?: string;
    host?: string | string[];
    port?: string;
    query?: IQueryParam[];
    hash?: string;
    variable: Variable[];
}

interface IQueryParam {
    key?: string;
    value?: string;
    disabled?: boolean;
    description?: IDescription;
}