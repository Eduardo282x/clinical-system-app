import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-employe',
  templateUrl: './register-employe.component.html',
  styleUrls: ['./register-employe.component.css'],
})
export class RegisterEmployeComponent { 

  firstFormGroup = this._formBuilder.group({
    firstCtrl: [''],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: [''],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private location: Location
  ){}

  goBack(): void {
    this.location.back()
  }
}
