import { stringify } from '@angular/compiler/src/util';
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
  tempos : string[] = ["week", "month", "year"];
  tempo : string;
  currency: string;
  currencies : string[] = ["$", "€", "¥", "£"];
  oldCurrency:string;
  ToDollar: number = 1;
  show: boolean =false;

  constructor(private mathService: MathService) {}
  
  checkFlag(){
    if(this.value!==null){
      this.show=true;
    } else {
      this.show=false;
    }
  }
  
  onModelChange(event,value) {
    if(this.oldCurrency != event) {
      this.selectCurrency(this.oldCurrency,event,value)
    }
    this.oldCurrency = event;
  }
  selectTempo(value){
    if (this.tempo === "week") {
        this.result = this.mathService.calculateTempo(value,Constants.SECS_PER_WEEK)
    } else if(this.tempo === "month"){
      this.result = this.mathService.calculateTempo(value,Constants.SECS_PER_MONTH_30)
    } else if (this.tempo === "year"){
      this.result = this.mathService.calculateTempo(value,Constants.SECS_PER_YEAR)};
    }

    
    selectCurrency(oldCurrency,event,value){
    
      if (oldCurrency === "$") {
          this.ToDollar = 1;
      } else if(oldCurrency === "€"){
          this.ToDollar = Constants.EURO_TO_DOLLAR;
      } else if (oldCurrency === "£"){
          this.ToDollar = Constants.POUND_TO_DOLLAR;
      } else if (oldCurrency === "¥"){
          this.ToDollar = Constants.YEN_TO_DOLLAR;
      };
    
    if (event === "$") {
        this.value = this.mathService.currencyConversion(value,this.ToDollar,1)
    } else if(this.currency === "€"){
      this.value = this.mathService.currencyConversion(value,this.ToDollar,Constants.DOLLAR_TO_EURO)
    } else if (this.currency === "£"){
      this.value = this.mathService.currencyConversion(value,this.ToDollar,Constants.DOLLAR_TO_POUND)
    } else if (this.currency === "¥"){
      this.value = this.mathService.currencyConversion(value,this.ToDollar,Constants.DOLLAR_TO_YEN)
      };
    }
  }

