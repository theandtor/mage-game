import { Component, OnInit, Input } from '@angular/core';
import { IValidation } from 'src/model/validation';

@Component({
  selector: 'app-show-answer',
  templateUrl: './show-answer.component.html',
  styleUrls: ['./show-answer.component.scss']
})
export class ShowAnswerComponent implements OnInit {
  @Input() result: IValidation[];
  
  constructor() { }

  ngOnInit() {
  }

}
