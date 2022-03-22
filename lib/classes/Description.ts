import { IDescription } from "../interfaces/description-interface";

export class Description implements IDescription {
    content?: string;
    type?: string;

    constructor(options: IDescription) {
        this.content = options.content;
        this.type = options.type;
    }

    static resolve(obj: any) {
        if (obj instanceof Description || !this.validate(obj))
            return obj;
        return new Description(obj);
    }
    static validate(obj: any) {
        return obj.content || obj.type;
    }
}