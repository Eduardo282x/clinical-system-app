import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-employe',
  templateUrl: './register-employe.component.html',
  styleUrls: ['./register-employe.component.css'],
})
export class RegisterEmployeComponent { 

  @Output() goBack = new EventEmitter<boolean>();

  constructor(){}

    
  goBackEmploye(): void {
    this.goBack.emit(true);
  }
}
