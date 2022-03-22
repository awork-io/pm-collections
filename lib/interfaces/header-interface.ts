import { IDescription } from "./description-interface";

export interface IHeader {
    key: string;
    value: string;
    disabled?: boolean;
    description?: IDescription;
}