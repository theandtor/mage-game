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

    while (newPotions.length > 0) {
      let numberPotions = 0;
      let percentage = 0;
      VALIDATION.forEach(element => {
        if (element.quantityPotions === newPotions.length && element.percentage > percentage) {
          
          percentage = element.percentage;
          numberPotions = element.quantityPotions;

        } else if (element.quantityPotions < newPotions.length) {
          const remainingPotions = newPotions.length - element.quantityPotions;

          const percentageMaxQuantyty = this.calculateSumPercentage(element.percentage, 1);

          const validation = VALIDATION.find(val => val.quantityPotions === remainingPotions)
          
          if (!validation) {
            return;
          }
          
          const percentageRemainingPotions = this.calculateSumPercentage(validation.percentage, 1);

          let sumPercentaje = percentageMaxQuantyty + percentageRemainingPotions;

          if (sumPercentaje > percentage) {
            percentage = percentageMaxQuantyty;
            numberPotions = element.quantityPotions;
          }
        }
      });
      
      answer.push(new Validation(numberPotions, percentage))
      newPotions = this.reduceuantity(newPotions, 1, numberPotions);
    }
    return answer;
  }

  private calculateSumPercentage(percentage: number, times): number {
    let sum = 0;
    for (let index = 0; index < times; index++) {
      sum += percentage;
    }
    return sum;
  }

  private removeUnused(listPotions: IPotion[]): IPotion[] {
    return listPotions.filter(item => item.quantity > 0)
  }

  private reduceuantity(listPotions: IPotion[], numberToReduce: number, timesToReduc: number): IPotion[] {
    let list = listPotions;
    let i = 0;
    list.forEach(element => {
      if (timesToReduc > i) {
        i++;
        element.quantity -= numberToReduce;
      }
    });
    return this.removeUnused(list)
  }

}
