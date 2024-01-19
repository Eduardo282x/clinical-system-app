import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormDialog } from 'src/app/core/interface/form-generic/form-genereic';

@Component({
  selector: 'app-form-generic',
  templateUrl: './form-generic.component.html',
  styleUrls: ['./form-generic.component.css'],
})
export class FormGenericComponent implements OnInit{

  formGeneric: FormGroup = new FormGroup({

  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FormDialog
  ){}

  ngOnInit(): void {
    this.data.dataForm.map(form => {
      this.formGeneric.addControl(form.formControlName, new FormControl(form.value ? form.value : ''))
    })

  }

  sendDataForm(): void {
    
    console.log(this.formGeneric.value);
  }
}
