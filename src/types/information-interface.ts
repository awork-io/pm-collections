import { IProperty } from "./property-interface";

export interface IInformation extends IProperty {
    version?: string | {
        major: number;
        minor: number;
        patch: number;
        identifier?: string;
        meta?: any;
    };
    schema?: string;
}