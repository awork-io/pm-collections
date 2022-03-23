import { Auth } from "../classes/Auth";
import { Event, EventList } from "../classes/Event";
import { Folder, Item } from "../classes/Item";
import { Variable, VariableList } from "../classes/Variable";
import { IItem } from "./item-interface";
import { IProperty } from "./property-interface";

export interface IFolder extends IProperty {
    variable?: VariableList | Variable[];
    item: (IItem | Item | IFolder | Folder)[];
    event?: EventList | Event[];
    auth?: Auth;
}