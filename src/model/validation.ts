export interface IValidation {
    quantityPotions: number;
    percentage: number;
}

export class Validation implements IValidation {
    constructor ( public quantityPotions: number,public percentage: number) {}
}