import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Banner } from 'src/app/core/interface/banner/banner';
import { BannerState } from 'src/app/core/state/banner/bannes.state';
import { bannerData } from './employes.data';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit { 

  bannerData = bannerData

  constructor(
    private bannerState: BannerState,
    private _location: Location
  ){

  }

  ngOnInit(): void {
    this.bannerState.setState(this.bannerData)
  }

  goBack(): void {
    this._location.back();
  }

}
