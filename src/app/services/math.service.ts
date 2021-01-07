import { Injectable } from "@angular/core";
import { Constants } from "../app.constants";

@Injectable({
    providedIn: 'root',
})
export class MathService {

    calculate (value:number,tempo:number){
        return value/tempo;
    }

}