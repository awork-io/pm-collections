import { ICollection } from "../interfaces/collection-interface";
import { IDescription } from "../interfaces/description-interface";
import { IFolder } from "../interfaces/folder-interface";
import { IInformation } from "../interfaces/information-interface";
import { IItem } from "../interfaces/item-interface";
import { Auth } from "./Auth";
import { Description } from "./Description";
import { EventList, Event } from "./Event";
import { Folder, Item } from "./Item";
import { VariableList, Variable } from "./Variable";

export class Collection implements ICollection {
    info?: IInformation;
    protocolProfileBehavior?: any;
    variable?: VariableList | Variable[] | undefined;
    item: (IFolder | IItem | Item | Folder)[];
    event?: EventList | Event[] | undefined;
    auth?: Auth | undefined;
    id?: string | undefined;
    name?: string | undefined;
    disabled?: boolean | undefined;
    description?: string | IDescription | Description | undefined;

    constructor(options: ICollection) {
        this.info = options.info;
        this.protocolProfileBehavior = options.protocolProfileBehavior;
        this.variable = VariableList.resolve(options.variable);
        this.item = options.item.map((i: any) =>
            i.item ?
            Folder.resolve(i) :
            Item.resolve(i)
        );
        this.event = EventList.resolve(options.event);
        this.auth = options.auth;
        this.id = options.id;
        this.name = options.name;
        this.disabled = options.disabled;
        this.description = Description.resolve(options.description);
    }
    static resolve(obj: any) {
        if (obj instanceof Collection || !this.validate(obj))
            return obj;
        return new Collection(obj);
    }
    static validate(obj: any) {
        return obj.info ||
            obj.protocolProfileBehavior ||
            obj.variable ||
            obj.item ||
            obj.event ||
            obj.auth ||
            obj.id ||
            obj.name ||
            obj.disabled ||
            obj.description;
    } 
}