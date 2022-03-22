import { IDescription } from "./description-interface";

export interface IInformation {
    name: string;
    _postman_id?: string;
    description?: IDescription;
    version?: any;
    schema: string;
}