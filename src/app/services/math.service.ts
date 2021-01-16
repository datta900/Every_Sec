import { Injectable } from "@angular/core";
import { Constants } from "../app.constants";

@Injectable({
    providedIn: 'root',
})
export class MathService {

    calculateTempo (value:number,tempo:number){
        return value/tempo;
    }

    currencyConversion (value:number, ToDollar:number, toSelectedCurrency:number) {
        return value*(toSelectedCurrency/ToDollar);
    }


}