import { Script } from "../classes/Script";

export interface IEvent {
    id?: string;
    listen: string;
    script?: Script;
    disabled?: boolean;
}