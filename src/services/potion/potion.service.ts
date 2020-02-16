import { Injectable } from '@angular/core';
import { VALIDATION } from 'src/environments/global-constants';
import { IPotion } from 'src/model/potion';
import { Validation, IValidation } from 'src/model/validation';

@Injectable({
  providedIn: 'root'
})
export class PotionService {

  constructor() { }

  public calculateBestAttack(listPotions: IPotion[]): IValidation[] {
    let newPotions: IPotion[] = this.removeUnused(listPotions);
    let answer: IValidation[] = [];

    while(newPotions.length > 0) {
      let numberPotions = 0;
      let percentage = 0;
      VALIDATION.forEach(element => {
        if (element.quantityPotions === newPotions.length && element.percentage > percentage ) {
          percentage = element.percentage;
          numberPotions = element.quantityPotions;
        }
      });
      answer.push(new Validation(numberPotions, percentage))
      newPotions = this.reduceuantity(newPotions);
    }
    return answer;
  }

  private removeUnused(listPotions: IPotion[]): IPotion[] {
    return listPotions.filter(item => item.quantity > 0)
  }

  private reduceuantity(listPotions: IPotion[]): IPotion[] {
    let list = listPotions;
    list.forEach(element => {
      element.quantity = element.quantity - 1; 
    });
    return this.removeUnused(list)
  }

}
