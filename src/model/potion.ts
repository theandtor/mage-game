export interface IPotion {
    id: number;
    color: String;
    quantity: number;
}

export class Potion implements IPotion {
    constructor ( public id: number, public color: String, public quantity: number) {}
}