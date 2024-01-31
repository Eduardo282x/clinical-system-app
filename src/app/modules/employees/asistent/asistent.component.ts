import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employe } from 'src/app/core/interface/employes/employe';
import { EmployesService } from 'src/app/core/services/employes/employes.service';

@Component({
  selector: 'app-asistent',
  templateUrl: './asistent.component.html',
  styleUrls: ['./asistent.component.css'],
})
export class AsistentComponent implements OnInit {
  
  formAssistent: FormGroup = new FormGroup({
    securityKey: new FormControl('')
  })

  employeAssistent: Employe = {NameFull: 'asd', Identify: '', Rol:''};
  existAssistent: boolean = true;

  constructor(
    private employesService: EmployesService
  ){}

  ngOnInit(): void {
      this.employesService.getData$().subscribe({
        next: (asistent: Employe| any) => {
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
