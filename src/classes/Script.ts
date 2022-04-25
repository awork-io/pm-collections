import { IScript } from "../types/script-interface";
import { IUrl } from "../types/url-interface";
import { Url } from "./Url";

export class Script implements IScript {
  id?: string;
  type?: string;
  exec?: string | string[];
  src?: string | IUrl | Url;
  name?: string;

  constructor(options: IScript) {
    this.id = options.id;
    this.type = options.type;
    this.exec = options.exec;
    this.src = Url.resolve(options.src);
    this.name = options.name;
  }
  
  static resolve(obj: any) {
    if (typeof obj === "string") return new Script({ exec: obj });
    if (obj instanceof Script || !this.validate(obj)) return obj;
    return new Script(obj);
  }
  static validate(obj: any) {
    return !!(obj && (obj.id || obj.type || obj.exec || obj.src || obj.name));
  }
}
