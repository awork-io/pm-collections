import { Auth } from "../classes/Auth";
import { Event, EventList } from "../classes/Event";
import { Folder, Item } from "../classes/Item";
import { Variable, VariableList } from "../classes/Variable";
import { IInformation } from "./information-interface";

export interface ICollection {
    info: IInformation;
    item: Item[] | Folder[];
    event?: EventList | Event[];
    variable?: VariableList | Variable[];
    auth?: Auth;
}