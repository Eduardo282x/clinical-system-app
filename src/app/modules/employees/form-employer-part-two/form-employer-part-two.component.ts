import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { UsersService } from 'src/app/core/services/users/users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Roles } from 'src/app/core/interface/users/users';
import { EmployesService } from 'src/app/core/services/employes/employes.service';

@Component({
  selector: 'app-form-employer-part-two',
  templateUrl: './form-employer-part-two.component.html',
  styleUrls: ['./form-employer-part-two.component.css'],
})
export class FormEmployerPartTwoComponent extends BaseComponent implements OnInit {

  @Output() formValid: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  disableInput: boolean = false;
  
  formEmployePartTwo: FormGroup = new FormGroup({
    rol: new FormControl('',Validators.required),
    user: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    securityKey: new FormControl('',Validators.required),
    medicData: new FormControl('',Validators.required),
  });

  keys: any[] = [];
  roles: Roles[] = [];

  constructor(
    private usersService: UsersService,
    private employesService: EmployesService
  ){
    super();
  }

  ngOnInit(): void {
      this.usersService.getRoles();
      this.employesService.getSecurityKeys();

      this.employesService.getData$().subscribe({
        next: (response: any) => {
          if(response){
            this.keys = response;
          }
        }
      });

      this.usersService.getData$().subscribe({
        next: (response: any) => {
          if(response){
            this.roles = response;
          }
        }
      });

      this.employesService.getDataEmploye$().subscribe({
        next: (response : any) => {
          console.log(response);
          if(response){
            this.disableInput = true;
            this.formEmployePartTwo.controls['rol'].setValue(response.Rol);
            this.formEmployePartTwo.controls['user'].setValue(response.Username);
            this.formEmployePartTwo.controls['password'].setValue(response.Password);
            this.formEmployePartTwo.controls['securityKey'].setValue(response.SecurityKey);
            this.formEmployePartTwo.controls['medicData'].setValue(response.MedicalData);
          }

          console.log(this.formEmployePartTwo.value);
          
        }
      })
  }

  generateSecutiryKey(): void {
    let numeroAleatorio = '';
    const caracteres = '0123456789';
    const longitud = 12;

    do {
      numeroAleatorio = '';
      for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        numeroAleatorio += caracteres.charAt(indiceAleatorio);
      }
    } while (this.randomNumberGenerate(numeroAleatorio));
    
    this.formEmployePartTwo.controls['securityKey'].setValue(numeroAleatorio);
  }

  randomNumberGenerate(randomNumber: string): boolean {
    return this.keys.some(secutiry => secutiry.SecurityKey == randomNumber);
  }

  sendFormDate(): void{
    this.formValid.emit(this.formEmployePartTwo);
  }

}
