import { StepperOptions } from '@angular/cdk/stepper';
import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { EmployesComplete, PreviewEmploye } from 'src/app/core/interface/employes/employe';
import { FormEmployerPartTwoComponent } from '../form-employer-part-two/form-employer-part-two.component';
import { BaseComponent } from '../../base/base.component';
import { RegisterCompletedComponent } from '../../shared/register-completed/register-completed.component';
import { Roles } from 'src/app/core/interface/users/users';
import { UsersService } from 'src/app/core/services/users/users.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-register-employe',
  templateUrl: './register-employe.component.html',
  styleUrls: ['./register-employe.component.css'],
})
export class RegisterEmployeComponent extends BaseComponent implements OnInit { 

  @ViewChild(RegisterCompletedComponent)formEmployedPartOne!: RegisterCompletedComponent;
  @ViewChild(FormEmployerPartTwoComponent)formEmployedPartTwo!: FormEmployerPartTwoComponent;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: [''],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: [''],
  });

  validFirst: boolean = false;
  validSecond: boolean = false;

  formOneLocal: FormGroup = new FormGroup({});
  formTwoLocal: FormGroup = new FormGroup({});

  preview: PreviewEmploye = {
    NameFull :'Aixa Chacin',
    Rol: 'Administradora',
    Idenfity :'V 28391325',
    DateInit: new Date(),
    SecutiryKey: '123456789000',
  };

  roles: Roles[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private location: Location,
    private userService: UsersService
  ){
    super();
  }

  ngOnInit(): void {
    this.userService.getRoles();

    this.userService.getData$()
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe({
      next: (response: Roles[] | any) => {
        if(response){
          this.roles = response;
          console.log(this.roles);
          
        }
      }
    })
  }

  goStepperFinal(stepper: MatStepper): void {
    this.formEmployedPartTwo.sendFormDate();
    if(this.validSecond){
      const rolForm = this.formTwoLocal.get('rol')?.value
      const rolDes = this.roles.find(item => item.Id_Rol == rolForm);

        this.preview = {
          NameFull : this.formOneLocal.get('NameFull')?.value,
          Rol: rolDes?.RolDes || '',
          Idenfity: `${this.formOneLocal.get('Prefix')?.value} ${this.formOneLocal.get('Identify')?.value}`,
          DateInit: new Date(),
          SecutiryKey: this.formTwoLocal.get('securityKey')?.value ,
        };
      console.log(this.formTwoLocal.value);
      
      stepper.next()
    }
  }

  goTwoStepper(stepper: MatStepper): void {
    this.formEmployedPartOne.sendDataForm();
    if(this.validFirst){
      stepper.next()
    }
  }

  validSecondForm(formTwo: FormGroup): void {
    this.formTwoLocal = formTwo;
    if(formTwo){
      this.validSecond = formTwo.valid;
    }
  }

  getOneForm(formOne: FormGroup): void {
    this.formOneLocal = formOne;
    if(formOne){
      this.validFirst = formOne.valid;
    }
  }

  sendCompleteData(): void {
    const employeRegister: EmployesComplete = {
      NameFull: this.formOneLocal.get('NameFull')?.value,
      Identify: this.formOneLocal.get('Identify')?.value,
      Age: this.formOneLocal.get('Age')?.value,
      Sex: this.formOneLocal.get('Sex')?.value,
      PhonePrimary: this.formOneLocal.get('PhonePrimary')?.value,
      PhoneSecundary: this.formOneLocal.get('PhoneSecundary')?.value,
      Email: this.formOneLocal.get('Email')?.value,
      Address: this.formOneLocal.get('Address')?.value,
      Birthdate: this.formTwoLocal.get('Birhdate')?.value,

      MedicalData: this.formTwoLocal.get('medicData')?.value,
      Username: this.formTwoLocal.get('user')?.value,
      Password: this.formTwoLocal.get('password')?.value,
      SecurityKey: this.formTwoLocal.get('securityKey')?.value,
      Rol: this.formTwoLocal.get('rol')?.value,
    }

    console.log(employeRegister);
    
  }

  goBack(): void {
    this.location.back()
  }
}
