import { IBaseProperty } from "./base-property-interface";

export interface IHeader extends IBaseProperty{
    key: string;
    value: string;
    disabled?: boolean;
}