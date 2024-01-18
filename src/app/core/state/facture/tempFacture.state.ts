import { Injectable } from "@angular/core";
import { BaseState } from "../base-state";
import { TempFacture } from "../../interface/facture/tempFacture";

@Injectable({
    providedIn: 'root'
})

export class TempFactureState extends BaseState<TempFacture>{
}
