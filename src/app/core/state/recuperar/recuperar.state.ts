import { Injectable } from "@angular/core";
import { BaseState } from "../base-state";
import { Recuperar } from "../../interface/recuperar";

@Injectable({
  providedIn: 'root'
})
export class RecuperarState extends BaseState<Recuperar>{
}  