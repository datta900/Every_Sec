import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { MathService } from '../services/math.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  value: number;
  result: number;

  constructor(private mathService: MathService) {}

  getResult() {
    this.result = this.mathService.secMonth(this.value);
  }

}
