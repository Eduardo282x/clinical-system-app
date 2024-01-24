import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormGeneric, registerGeneric } from 'src/app/core/interface/form-generic/formGeneric';

@Component({
  selector: 'app-register-completed',
  templateUrl: './register-completed.html',
  styleUrls: ['./register-completed.component.css'],
})
export class RegisterCompletedComponent implements OnInit{ 
  
  @Input() includePicture: any;
  @Output() dataForm = new EventEmitter<FormGroup>();

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
  ){}

  ngOnInit(): void {
      
  }


  sendDataForm(): void {
    const dataClient = {
      NameFull: this.registerGeneric.get('NameFull')?.value,
      Identify: this.registerGeneric.get('Prefix')?.value + this.registerGeneric.get('Identify')?.value,
      Birhdate: this.registerGeneric.get('Birhdate')?.value,
      Age: this.registerGeneric.get('Age')?.value,
      PhonePrimary: this.registerGeneric.get('PhonePrimary')?.value,
      PhoneSecundary: this.registerGeneric.get('PhoneSecundary')?.value,
      Email: this.registerGeneric.get('Email')?.value,
      Address: this.registerGeneric.get('Address')?.value,
      Sex: this.registerGeneric.get('Sex')?.value,
    }
    this.dataForm.emit(this.registerGeneric);
  }
  
  goBack(): void {
    this.location.back();
  }
}
