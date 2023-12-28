import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit { 

  constructor(
    // private _route: Router,
    private _location: Location
  ){

  }

  ngOnInit(): void {
      
  }

  goBack(): void {
    this._location.back();
  }

}
