import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register-employe',
  templateUrl: './register-employe.component.html',
  styleUrls: ['./register-employe.component.css'],
})
export class RegisterEmployeComponent { 

  constructor(
    private location: Location
  ){}

  goBack(): void {
    this.location.back()
  }
}
