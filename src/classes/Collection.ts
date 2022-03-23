import { ICollection } from "../types/collection-interface";
import { IFolder } from "../types/folder-interface";
import { IInformation } from "../types/information-interface";
import { IItem } from "../types/item-interface";
import { Auth } from "./Auth";
import { Description } from "./Description";
import { EventList, Event } from "./Event";
import { Information } from "./Information";
import { Folder, Item } from "./Item";
import { VariableList, Variable } from "./Variable";

export class Collection implements ICollection {
    info?: IInformation | Information;
    protocolProfileBehavior?: any;
    variable?: VariableList | Variable[] | undefined;
    item: (IFolder | IItem | Item | Folder)[];
    event?: EventList | Event[] | undefined;
    auth?: Auth | undefined;
    id?: string | undefined;
    disabled?: boolean | undefined;

    constructor(options: ICollection) {
        this.info = new Information({
            ...options.info,
            id: options.id, 
            name: options.name,
            description: Description.resolve(options.description),
        });
        this.protocolProfileBehavior = options.protocolProfileBehavior;
        this.variable = VariableList.resolve(options.variable);
        this.item = options.item.map((i: any) =>
            i.item ?
            Folder.resolve(i) :
            Item.resolve(i)
        );
        this.event = EventList.resolve(options.event);
        this.auth = options.auth;
        this.disabled = options.disabled;
    }
    static resolve(obj: any) {
        if (obj instanceof Collection || !this.validate(obj))
            return obj;
        return new Collection(obj);
    }
    static validate(obj: any) {
        return !!(obj && (
            obj.info ||
            obj.protocolProfileBehavior ||
            obj.variable ||
            obj.item ||
            obj.event ||
            obj.auth ||
            obj.id ||
            obj.name ||
            obj.disabled ||
            obj.description
        ));
    } 
}