import { Injectable } from "@angular/core";
import { BaseState } from "./base-state";
import { BaseResponse } from "../interface/BaseRespnse";

@Injectable({
    providedIn: 'root'
})
export class BaseResponseState extends BaseState<BaseResponse>{
}  