import { Injectable } from "@angular/core";
import { BaseState } from "../base-state";
import { Roles } from "../../interface/users/users";

@Injectable({
    providedIn: 'root'
})
export class RolesState extends BaseState<Roles[]> {
}  