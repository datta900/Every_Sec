import { Injectable } from "@angular/core";
import { Constants } from "../app.constants";

@Injectable({
    providedIn: 'root',
})
export class MathService {

    secWeek(currency: number){
        console.log("currency:", currency/Constants.SECS_PER_WEEK)
        return currency = currency/Constants.SECS_PER_WEEK
    }

    secMonth (currency: number){
        return currency = currency/Constants.SECS_PER_MONTH_30;
    }

    secYear (currency: number){
        return currency = currency/Constants.SECS_PER_YEAR;
    }

    secPerMinute(currency: number){
        return currency = currency/Constants.SECS_PER_MINUTE;
    }
    calculateTempo (value:number,tempo:number){
        return value/tempo;
    }

    currencyConversion (value:number, ToDollar:number, toSelectedCurrency:number) {
        return value*(toSelectedCurrency/ToDollar);
    }


}