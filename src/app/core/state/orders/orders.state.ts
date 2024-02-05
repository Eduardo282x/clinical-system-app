import { Injectable } from "@angular/core";
import { BaseState } from "../base-state";
import { Orders } from "../../interface/orders/orders";

@Injectable({
    providedIn: 'root'
})
export class OrdersState extends BaseState<Orders>{
}  