import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit  {

  constructor() {}
  title: string = '';

  ngOnInit(): void {
    this.title = 'clinical-system';
  }

}
