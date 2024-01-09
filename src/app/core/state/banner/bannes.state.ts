import { Injectable } from "@angular/core";
import { BaseState } from "../base-state";
import { Banner } from "../../interface/banner/banner";

@Injectable({
    providedIn: 'root'
})
export class BannerState extends BaseState<Banner>{
}  