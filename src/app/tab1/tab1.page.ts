import { Component } from '@angular/core';
import { Constants } from "../app.constants";
import { MathService } from '../services/math.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  value: number;
  result: number;
  choices : string[] = ["week", "month", "year"];
  selection : string;
  constructor(private mathService: MathService) {}

  selectTempo(value){
    if (this.selection === "week") {
        this.result = this.mathService.calculate(value,Constants.SECS_PER_WEEK)
    } else if(this.selection === "month"){
      this.result = this.mathService.calculate(value,Constants.SECS_PER_MONTH_30)
    } else if (this.selection === "year"){
      this.result = this.result = this.mathService.calculate(value,Constants.SECS_PER_YEAR)};
    }
  }

