import { IBaseProperty } from "./base-property-interface";

export interface IKeyValue extends IBaseProperty {
    key: string;
    value: string;
    disabled?: boolean;
}