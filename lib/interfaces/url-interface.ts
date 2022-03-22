import { Variable } from "../classes/Variable";
import { IBaseProperty } from "./base-property-interface";

export interface IUrl {
    raw?: string;
    protocol?: string;
    host?: string | string[];
    port?: string;
    query?: IQueryParam[];
    hash?: string;
    variable: Variable[];
}

interface IQueryParam extends IBaseProperty {
    key?: string;
    value?: string;
    disabled?: boolean;
}