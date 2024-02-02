import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-consult-login',
  templateUrl:'./consult-login.component.html',
  styleUrls: ['./consult-login.component.css'],
})
export class ConsultLoginComponent implements OnInit {

  formConsultLogin: FormGroup = new FormGroup({
    identity:new FormControl('', [Validators.required]),
    facture: new FormControl('', [Validators.required])
  });
  
  constructor(){

  }

  ngOnInit(): void {
      
  }

  onLoggin(): void {
    console.log(this.formConsultLogin.value);
    
  }
}
