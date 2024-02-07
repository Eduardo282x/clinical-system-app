import { Injectable } from "@angular/core";
import { BaseState } from "../base-state";
import { Examns } from "../../interface/examns/examns";

@Injectable({
    providedIn: 'root'
})
export class ExamnsState extends BaseState<Examns>{
}  