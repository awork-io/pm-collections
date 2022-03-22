import { IDescription } from "../interfaces/description-interface";
import { IInformation } from "../interfaces/information-interface";
import { Description } from "./Description";

export class Information implements IInformation {
    version?: string | { major: number; minor: number; patch: number; identifier?: string | undefined; meta?: any; } | undefined;
    schema: string;
    id?: string | undefined;
    name?: string | undefined;
    disabled?: boolean | undefined;
    description?: string | IDescription | Description | undefined;

    constructor(options: IInformation) {
        this.version = options.version;
        this.schema = options.schema;
        this.id = options.id;
        this.name = options.name;
        this.disabled = options.disabled;
        this.description = Description.resolve(options.description);
    }

}