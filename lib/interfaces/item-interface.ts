import { Event, EventList } from "../classes/Event";
import { Request } from "../classes/Request";
import { Response } from "../classes/Response";
import { Variable, VariableList } from "../classes/Variable";
import { IEvent } from "./event-interface";
import { IProperty } from "./property-interface";
import { IVariable } from "./variable-interface";

export interface IItem extends IProperty {
    variable?: IVariable[] | Variable[] | VariableList;
    event?: IEvent[] | Event[] | EventList;
    request: string | Request;
    response?: Response[];
}