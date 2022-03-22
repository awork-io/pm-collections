export class PropertyList<T> extends Array<T> {
    constructor(items: T[]) {
        super(...items);
    }
}