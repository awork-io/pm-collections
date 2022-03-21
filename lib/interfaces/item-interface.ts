import { Event, EventList } from "../classes/Event";
import { Request } from "../classes/Request";
import { Response } from "../classes/Response";
import { Variable, VariableList } from "../classes/Variable";

export interface IItem {
    id?: string;
    name?: string;
    description?: any;
    variable?: VariableList | Variable[];
    event?: EventList | Event[];
    request: Request;
    response?: Response[];
}