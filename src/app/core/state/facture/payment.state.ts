import { Injectable } from "@angular/core";
import { BaseState } from "../base-state";
import { Payments } from "../../interface/facture/bank";

@Injectable({
    providedIn: 'root'
})

export class PaymentsState extends BaseState<Payments>{
}
