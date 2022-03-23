import { AuthType, IAuth } from "../interfaces/auth-interface";

export class Auth implements IAuth {
    type: AuthType;

    constructor(options: IAuth) {
        this.type = options.type;
    }

    static resolve(obj: any) {
        if (obj instanceof Auth || !this.validate(obj))
            return obj;
        return new Auth(obj);
    }
    static validate(obj: any) {
        return obj.type;
    } 
}