import { IDescription } from "../types/description-interface";
import { IEvent } from "../types/event-interface";
import { IScript } from "../types/script-interface";
import { Description } from "./Description";
import { PropertyList } from "./PropertyList";
import { Script } from "./Script";

export class Event implements IEvent {
  listen: string;
  script?: string | IScript | Script | undefined;
  id?: string | undefined;
  name?: string | undefined;
  disabled?: boolean | undefined;
  description?: string | IDescription | Description | undefined;

  constructor(options: IEvent) {
    this.listen = options.listen;
    this.script = Script.resolve(options.script);
    this.id = options.id;
    this.name = options.name;
    this.disabled = options.disabled;
    this.description = Description.resolve(options.description);
  }

  static resolve(obj: any) {
    if (obj instanceof Event || !this.validate(obj)) return obj;
    return new Event(obj);
  }
  static validate(obj: any) {
    return !!(
      obj &&
      (obj.listen ||
        obj.script ||
        obj.id ||
        obj.name ||
        obj.disabled ||
        obj.description)
    );
  }
}
export class EventList extends PropertyList<Event> {
  constructor(list: (IEvent | Event)[]) {
    super(list.map(eventLike => Event.resolve(eventLike)));
  }

  static resolve(arr: any) {
    if (arr instanceof EventList || !this.validate(arr)) return arr;
    return new EventList(arr);
  }
  static validate(arr: any) {
    return !!(arr && arr.every((obj: any) => Event.validate(obj)));
  }
}
