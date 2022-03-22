import { IDescription } from "../interfaces/description-interface";
import { IHeader } from "../interfaces/header-interface";
import { Description } from "./Description";

export class Header implements IHeader {
    key: string;
    value: string;
    disabled?: boolean | undefined;
    description?: string | IDescription | Description | undefined;

    constructor(options: IHeader) {
        this.key = options.key;
        this.value = options.value;
        this.disabled = options.disabled;
        this.description = Description.resolveDescription(options.description);
    }

    static resolveHeader(obj: any) {
        if (this.isHeader(obj))
            return new Header(obj);
        return obj;
    }

    static isHeader(obj: any) {
        if (obj.key && obj.value)
            return true;
        return false;
    } 
}
export class HeaderList {}