import { Injectable } from "@angular/core";
import { BaseState } from "../base-state";
import { Factures } from "../../interface/facture/facture";

@Injectable({
    providedIn: 'root'
})

export class FacturesState extends BaseState<Factures[]>{
}
