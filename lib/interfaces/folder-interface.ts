import { Auth } from "../classes/Auth";
import { Event, EventList } from "../classes/Event";
import { Folder, Item } from "../classes/Item";
import { Variable, VariableList } from "../classes/Variable";

export interface IFolder {
    name?: string;
    description?: any;
    variable?: VariableList | Variable[];
    item: Item[] | Folder[];
    event?: EventList | Event[];
    auth?: Auth;
}