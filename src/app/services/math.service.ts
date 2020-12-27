import { Injectable } from "@angular/core";
import { Constants } from "../app.constants";

@Injectable({
    providedIn: 'root',
})
export class MathService {

    secMonth (value:number){
        return value = value/Constants.SECS_PER_MONTH_30;
    }

    secYear (value:number){
        return value = value/Constants.SECS_PER_YEAR;
    }

}