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
        this.description = Description.resolve(options.description);
    }

    static resolve(obj: any) {
        if (obj instanceof Header || !this.validate(obj))
            return obj;
        return new Header(obj);
    }
    static validate(obj: any) {
        return obj.key && obj.value;
    } 
}
export class HeaderList extends PropertyList<Header> {
    constructor(list: IKeyValue[] | Header[]) {
        super(list.map(headerLike => Header.resolve(headerLike)));
    }
}