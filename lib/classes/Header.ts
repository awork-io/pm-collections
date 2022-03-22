import { IDescription } from "../interfaces/description-interface";
import { IKeyValue } from "../interfaces/key-value-interface";
import { Description } from "./Description";
import { PropertyList } from "./PropertyList";

export class Header implements IKeyValue {
    key: string;
    value: string;
    disabled?: boolean | undefined;
    description?: string | IDescription | Description | undefined;

    constructor(options: IKeyValue) {
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
export class HeaderList extends PropertyList<Header> {
    constructor(list: IKeyValue[] | Header[]) {
        super(list.map(headerLike => Header.resolveHeader(headerLike)));
    }
}