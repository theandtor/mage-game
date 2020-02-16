import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PotionService } from 'src/services/potion/potion.service';
import { LIST_POTIONS } from 'src/environments/global-constants';
import { Potion, IPotion } from 'src/model/potion';
import { IValidation } from 'src/model/validation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  potionListForm: FormGroup;

  result: IValidation[];

  constructor(private fb: FormBuilder, protected potionService: PotionService) {

    /* 
    * Create dynamic object for validations of fields
    */
    let colors = LIST_POTIONS.reduce((acc, cur, i) => {
      acc[cur.color] = ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]];
      return acc;
    }, {});

    /*
      FORM BUILDER FOR VALIDATOS
    */

    this.potionListForm = this.fb.group(
      colors
    );
  }


  ngOnInit() {
  }

  get LIST_POTIONS() {
    return LIST_POTIONS
  }
  
  /*
    IF THE USER SUBMIT THE FORM
  */
  onSubmit(formValueObject) {
    this.result = null;
    const result: IPotion[] = this.convertObjectToArray(formValueObject)
    this.result = this.potionService.calculateBestAttack(result);
    console.log(result);
  }

  convertObjectToArray(object): IPotion[] {
    return Object.keys(object).map((key) => {
      return new Potion(key, object[key]);
    });
  }
}
