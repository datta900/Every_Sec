import { Component } from '@angular/core';
import { MathService } from '../services/math.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [DatePipe]
})
export class Tab2Page {
  latest_date: String;
  
  input_end_day : string;;
  input_end_month : string;
  input_end_year : string;

  euroValue: number;
  result: number;
 
  input_day: number;
  input_week: number;
  input_month: number;

  day: number;
  week: number;
  month: number;
  year: number;
  constructor(private mathService: MathService, private datePipe: DatePipe) {
    let dateTime = new Date()
    console.log(dateTime, "DATETIME")
    this.latest_date =this.datePipe.transform(dateTime, 'yyyy-MM-dd');
  }
   getResult(startDay: string, startMonth: string, startYear: string, endDay: string, endMonth: string, endYear: string,  ) {
    /*
    this.day = this.mathService.secPerMinute(this.euroValue);
    console.log(this.euroValue)
    this.week = this.mathService.secWeek(this.euroValue)
    this.month  = this.mathService.secYear(this.euroValue)
    this.year = this.mathService.secYear(this.euroValue);*/
    
    let startDayNumber = this.dateConverterFromStringToNumber(startDay, startMonth, startYear);
    let endDateNumber = this.dateConverterFromStringToNumber(endDay, endMonth, endYear);
    

    let startDate = new Date(startDayNumber[2], startDayNumber[1], startDayNumber[0]);
    let endDate = new Date(endDateNumber[2], endDateNumber[1], endDateNumber[0]);
    
    let numberOfDays = this.getDaysBetweenStartAndEnd(startDate, endDate);
    

    this.day = this.euroValue/numberOfDays;
  
    this.week = this.euroValue/(numberOfDays/7);
    this.month = this.euroValue/(numberOfDays/30)


  
    this.year = this.euroValue/(numberOfDays/365);//dentro in realtà ci sono i giorni totali
  }

  getDaysBetweenStartAndEnd(startDate : Date, endDate : Date) : number{
    let dayCount = 0

    while ( endDate >  startDate) {
      dayCount++;
      startDate.setDate(startDate.getDate() + 1)
      console.log("fff", startDate)
    }
    
    return dayCount; 
  }

  dateConverterFromStringToNumber(day: string, month: string, year: string){
    var dateNumber:number[] = new Array(3) //[day] [month] [year]
    
    dateNumber[0] = +day
    dateNumber[1] = +month
    dateNumber[2] = +year
    return dateNumber
  }

}
