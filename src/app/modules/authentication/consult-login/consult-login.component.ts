import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  
  constructor(
    private router: Router
  ){

  }

  ngOnInit(): void {
      
  }

  onLoggin(): void {
    console.log(this.formConsultLogin.value);
    const user = this.formConsultLogin.get('identity')?.value == '29986990';
    const facture = this.formConsultLogin.get('facture')?.value == '1007852';
    if(user && facture){
      this.router.navigate(['/view-orders'])
    }
    this.router.navigate(['/view-orders'])
  }
}
