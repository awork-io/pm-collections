import { IDescription } from "../interfaces/description-interface";

export class Description implements IDescription {
    content?: string;
    type?: string;

    constructor(options: IDescription) {
        this.content = options.content;
        this.type = options.type;
    }

    static resolveDescription(obj: any) {
        if (this.isDescription(obj))
            return new Description(obj);
        return obj;
    }

    static isDescription(obj: any) {
        if(obj.content || obj.type)
            return true;
        return false;
    }
}