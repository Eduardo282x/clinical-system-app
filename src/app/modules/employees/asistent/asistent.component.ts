import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseResponse } from 'src/app/core/interface/BaseResponse';
import { Employe } from 'src/app/core/interface/employes/employe';
import { EmployesService } from 'src/app/core/services/employes/employes.service';
import { SnackBarComponent } from '../../shared/snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-asistent',
  templateUrl: './asistent.component.html',
  styleUrls: ['./asistent.component.css'],
})
export class AsistentComponent implements OnInit {
  
  formAssistent: FormGroup = new FormGroup({
    securityKey: new FormControl('')
  })

  employeAssistent: Employe = {NameFull: '', Identify: '', Rol:''};
  existAssistent: boolean = true;

  constructor(
    private _snackBar: MatSnackBar,
    private employesService: EmployesService
  ){}

  ngOnInit(): void {
      this.employesService.getData$().subscribe({
        next: (asistent: Employe | any) => {
          if(asistent && !asistent.success){
            this._snackBar.openFromComponent(SnackBarComponent,{
              duration: 2000,
              data: asistent
            });
          }
          
          if(asistent){
            this.existAssistent = true;
            this.employeAssistent = asistent;
            console.log(asistent);
            console.log(this.employeAssistent);
          }
          else{
            this.existAssistent = false;
          }
        }
      })
  }

  sendSecurityKey(): void{
    const asistent = {
      SecurityKey: this.formAssistent.get('securityKey')?.value
    }

    this.employesService.getSecurityKeyEmployedApi(asistent)
  }

}
