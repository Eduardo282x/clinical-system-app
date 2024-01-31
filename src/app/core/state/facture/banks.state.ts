import { Injectable } from "@angular/core";
import { BaseState } from "../base-state";
import { Banks } from "../../interface/facture/bank";

@Injectable({
    providedIn: 'root'
})

export class BanksState extends BaseState<Banks>{
}
