import { Event, EventList } from "../classes/Event";
import { Request } from "../classes/Request";
import { Response } from "../classes/Response";
import { Variable, VariableList } from "../classes/Variable";
import { IDescription } from "./description-interface";
import { IEvent } from "./event-interface";
import { IVariable } from "./variable-interface";

export interface IItem {
    id?: string;
    name?: string;
    description?: IDescription;
    variable?: IVariable[] | Variable[] | VariableList;
    event?: IEvent[] | Event[] | EventList;
    request: Request;
    response?: Response[];
}