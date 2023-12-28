import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css'],
})
export class ExamsComponent implements OnInit {
    
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
