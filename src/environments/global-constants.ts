import { IPotion, Potion } from 'src/model/potion';
import { IValidation, Validation} from 'src/model/validation';

export const LIST_POTIONS: IPotion[] = [
    new Potion('Red', 0),
    new Potion('Blue', 0),
    new Potion('Green', 0),
    new Potion('Yellow', 0),
    new Potion('Gray', 0)
];

export const VALIDATION: IValidation[] = [
    new Validation(5, 25),
    new Validation(4, 20),
    new Validation(3, 10),
    new Validation(2, 5),
    new Validation(1, 3)
];