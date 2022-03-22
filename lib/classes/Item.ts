import { IDescription } from "../interfaces/description-interface";
import { IEvent } from "../interfaces/event-interface";
import { IItem } from "../interfaces/item-interface";
import { IRequest } from "../interfaces/request-interface";
import { IResponse } from "../interfaces/response-interface";
import { IVariable } from "../interfaces/variable-interface";
import { Description } from "./Description";
import { Event, EventList } from "./Event";
import { PropertyList } from "./PropertyList";
import { Request } from "./Request";
import { Response } from "./Response";
import { Variable, VariableList } from "./Variable";

export class Item implements IItem {
    variable?: IVariable[] | Variable[] | VariableList | undefined;
    event?: IEvent[] | Event[] | EventList | undefined;
    request: string | IRequest | Request;
    response?: IResponse[] | Response[] | undefined;
    id?: string | undefined;
    name?: string | undefined;
    disabled?: boolean | undefined;
    description?: string | IDescription | Description | undefined;

    constructor(options: IItem) {
        this.variable = VariableList.resolve(options.variable);
        this.event = EventList.resolve(options.event);
        this.request = Request.resolve(options.request);
        this.response = options.response?.map((r) => Response.resolve(r));
        this.id = options.id;
        this.name = options.name;
        this.disabled = options.disabled;
        this.description = Description.resolve(options.description);
    }
    
    static resolve(obj: any) {
        if (obj instanceof Item || !this.validate(obj))
            return obj;
        return new Item(obj);
    }
    static validate(obj: any) {
        return obj.variable ||
            obj.event ||
            obj.request ||
            obj.response ||
            obj.id ||
            obj.name ||
            obj.disabled ||
            obj.description;
    } 
}
export class Folder extends PropertyList<Folder> {}