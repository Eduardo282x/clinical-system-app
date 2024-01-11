import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

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
