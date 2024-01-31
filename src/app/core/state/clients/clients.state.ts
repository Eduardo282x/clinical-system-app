import { Injectable } from "@angular/core";
import { BaseState } from "../base-state";
import { Clients, ClientsCompleted } from "../../interface/clients/clients";

@Injectable({
    providedIn: 'root'
})

export class ClientsState extends BaseState<Clients | ClientsCompleted>{
}
