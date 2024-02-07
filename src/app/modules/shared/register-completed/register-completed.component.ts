import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientsCompleted } from 'src/app/core/interface/clients/clients';
import { EmployesComplete } from 'src/app/core/interface/employes/employe';
import { EmitFormOne, FormGeneric, registerGeneric } from 'src/app/core/interface/form-generic/formGeneric';
import { ClientsService } from 'src/app/core/services/clients/clients.service';
import { EmployesService } from 'src/app/core/services/employes/employes.service';

@Component({
  selector: 'app-register-completed',
  templateUrl: './register-completed.html',
  styleUrls: ['./register-completed.component.css'],
})
export class RegisterCompletedComponent implements OnInit{ 
  
  @Input() includePicture: any;
  @Output() dataForm = new EventEmitter<EmitFormOne>();
  disableInput: boolean = false;
  isClient: boolean = false;

  registerGeneric: FormGroup = new FormGroup({
    Id: new FormControl(''),
    NameFull: new FormControl('', [Validators.required]),
    Prefix: new FormControl('', [Validators.required]),
    Identify: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    Birhdate: new FormControl('', [Validators.required]),
    Age: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
    PhonePrimary: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
    PhoneSecundary: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Address: new FormControl('', [Validators.required]),
    Sex: new FormControl('', [Validators.required]),
  });

  constructor(
    private location : Location,
    private employeService: EmployesService,
    private clientService: ClientsService
  ){}

  ngOnInit(): void {
      this.clientService.getData$().subscribe({
        next: (response: ClientsCompleted) => {
          if(response){
            this.disableInput = true;
            this.isClient = true;
            this.registerGeneric.controls['Id'].setValue(response.IdClients)
            this.registerGeneric.controls['NameFull'].setValue(response.NameFull)
            if(response.Identify){
              this.registerGeneric.controls['Prefix'].setValue(response.Identify.charAt(0))
              this.registerGeneric.controls['Identify'].setValue(response.Identify.substring(1))
            }
            this.registerGeneric.controls['Birhdate'].setValue(response.Birhdate)
            this.registerGeneric.controls['Age'].setValue(response.Age)
            this.registerGeneric.controls['PhonePrimary'].setValue(response.PhonePrimary)
            this.registerGeneric.controls['PhoneSecundary'].setValue(response.PhoneSecundary)
            this.registerGeneric.controls['Email'].setValue(response.Email)
            this.registerGeneric.controls['Address'].setValue(response.Address)
            this.registerGeneric.controls['Sex'].setValue(response.Sex)
          }
        }
      })

      this.employeService.getDataEmploye$().subscribe({
        next: (response : EmployesComplete) => {
          if(response){
            this.disableInput = true;
            this.isClient = false;
            this.registerGeneric.controls['Id'].setValue(response.Id)
            this.registerGeneric.controls['NameFull'].setValue(response.NameFull)
            if(response.Identify){
              this.registerGeneric.controls['Prefix'].setValue(response.Identify.charAt(0))
              this.registerGeneric.controls['Identify'].setValue(response.Identify.substring(1))
            }
            this.registerGeneric.controls['Birhdate'].setValue(response.Birthdate)
            this.registerGeneric.controls['Age'].setValue(response.Age)
            this.registerGeneric.controls['PhonePrimary'].setValue(response.PhonePrimary)
            this.registerGeneric.controls['PhoneSecundary'].setValue(response.PhoneSecundary)
            this.registerGeneric.controls['Email'].setValue(response.Email)
            this.registerGeneric.controls['Address'].setValue(response.Address)
            this.registerGeneric.controls['Sex'].setValue(response.Sex)
          }
        }
      })
  }

  validateMax(event: Event, maxLengh: number, formcontrol: string): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length > maxLengh) {
      input.value = input.value.slice(0, maxLengh);
      this.registerGeneric.controls[formcontrol].setValue(input.value);
    }
  }

  sendDataForm(): void {
    if(this.registerGeneric.valid){

      const send: EmitFormOne= {
        form: this.registerGeneric,
        action: !this.disableInput ? 'add' : 'edit'
      };
      this.dataForm.emit(send);
      if(this.isClient){
        this.location.back();
      }
    }
  }
  
  goBack(): void {
    this.location.back();
  }
}
