import { IPropertyList } from "../interfaces/property-list-interface";

export class PropertyList<T> extends Array<T> {
    constructor(items: T[]) {
        super(...items);
    }
}