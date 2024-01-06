import { Injectable } from "@angular/core";
import { BaseState } from "../base-state";

@Injectable({
    providedIn: 'root'
})
export class FooterDataState extends BaseState<string[]>{
}  