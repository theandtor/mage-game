import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PotionService } from 'src/services/potion/potion.service';
import { LIST_POTIONS } from 'src/environments/global-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  potionListForm: FormGroup;

  error : boolean; // variable changes if there are an error

  constructor(private fb: FormBuilder, protected potionService: PotionService) {
    /*
      FORM BUILDER FOR VALIDATOS
    */

    let colors = LIST_POTIONS.reduce((acc, cur, i) => {
      acc[cur.color] = ['', Validators.required];
      return acc;
    }, {});
    
    this.potionListForm = this.fb.group({
      ...colors
    });

    // default when the app starts
    this.error = null;
  }


  ngOnInit() {
    console.log(

      ...LIST_POTIONS.map(item => {
        return {
          [item.color]: ['', Validators.required]
        }
      })
    )
  }

  get LIST_POTIONS() {
    return LIST_POTIONS
  }
  /*
    IF THE USER SUBMIT THE FORM
  */
  onSubmit(formValueObject) {
    this.error = this.potionListForm.getPermission(formValueObject);
  }
}
