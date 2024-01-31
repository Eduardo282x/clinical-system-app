import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormGeneric, registerGeneric } from 'src/app/core/interface/form-generic/formGeneric';
import { EmployesService } from 'src/app/core/services/employes/employes.service';

@Component({
  selector: 'app-register-completed',
  templateUrl: './register-completed.html',
  styleUrls: ['./register-completed.component.css'],
})
export class RegisterCompletedComponent implements OnInit{ 
  
  @Input() includePicture: any;
  @Output() dataForm = new EventEmitter<FormGroup>();
  disableInput: boolean = false;

  registerGeneric: FormGroup = new FormGroup({
    NameFull: new FormControl('', [Validators.required]),
    Prefix: new FormControl('', [Validators.required]),
    Identify: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]),
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
    private employeService: EmployesService
  ){}

  ngOnInit(): void {
      this.employeService.getDataEmploye$().subscribe({
        next: (response : any) => {
          console.log(response);
          if(response){
            this.disableInput = true;
            this.registerGeneric.controls['NameFull'].setValue(response.NameFull)
            this.registerGeneric.controls['Prefix'].setValue(response.Identify.charAt(0))
            this.registerGeneric.controls['Identify'].setValue(response.Identify.substring(1))
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
    this.dataForm.emit(this.registerGeneric);
  }
  
  goBack(): void {
    this.location.back();
  }
}
