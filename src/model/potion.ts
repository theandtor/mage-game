export interface IPotion {
    color: String;
    quantity: number;
}

export class Potion implements IPotion {
    constructor ( public color: String, public quantity: number) {}
}