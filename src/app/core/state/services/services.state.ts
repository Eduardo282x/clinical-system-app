import { Injectable } from "@angular/core";
import { BaseState } from "../base-state";
import { Services } from "../../interface/services/services";

@Injectable({
    providedIn: 'root'
})

export class ServicesState extends BaseState<Services>{
}
