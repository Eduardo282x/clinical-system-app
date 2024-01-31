import { Injectable } from "@angular/core";
import { BaseState } from "../base-state";
import { EmployesComplete } from "../../interface/employes/employe";

@Injectable({
    providedIn: 'root'
})
export class EmployeAllState extends BaseState<EmployesComplete>{
}  