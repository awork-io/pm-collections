import { Auth } from "../classes/Auth";
import { Event, EventList } from "../classes/Event";
import { Folder, Item } from "../classes/Item";
import { Variable, VariableList } from "../classes/Variable";
import { IDescription } from "./description-interface";
import { IItem } from "./item-interface";

export interface IFolder {
    name?: string;
    description?: IDescription;
    variable?: VariableList | Variable[];
    item: IItem[] | Item[] | IFolder[] | Folder[];
    event?: EventList | Event[];
    auth?: Auth;
}