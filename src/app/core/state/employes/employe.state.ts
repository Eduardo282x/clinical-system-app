import { Injectable } from "@angular/core";
import { BaseState } from "../base-state";
import { Employe } from "../../interface/employes/employe";

@Injectable({
    providedIn: 'root'
})
export class EmployeState extends BaseState<Employe>{
}  