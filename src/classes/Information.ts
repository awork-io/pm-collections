import { IDescription } from "../types/description-interface";
import { IInformation } from "../types/information-interface";
import { Description } from "./Description";

const defSchema = "https://schema.getpostman.com/json/draft-07/collection/v2.1.0/";

export class Information implements IInformation {
    version?: string | { major: number; minor: number; patch: number; identifier?: string | undefined; meta?: any; } | undefined;
    schema?: string;
    id?: string | undefined;
    name?: string | undefined;
    disabled?: boolean | undefined;
    description?: string | IDescription | Description | undefined;

    constructor(options: IInformation) {
        this.version = options.version;
        this.schema = options.schema || defSchema;
        this.id = options.id;
        this.name = options.name;
        this.disabled = options.disabled;
        this.description = Description.resolve(options.description);
    }

}