import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { UsersService } from 'src/app/core/services/users/users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Roles } from 'src/app/core/interface/users/users';

@Component({
  selector: 'app-form-employer-part-two',
  templateUrl: './form-employer-part-two.component.html',
  styleUrls: ['./form-employer-part-two.component.css'],
})
export class FormEmployerPartTwoComponent extends BaseComponent implements OnInit {

  @Output() formValid: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  formEmployePartTwo: FormGroup = new FormGroup({
    rol: new FormControl('',Validators.required),
    user: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    securityKey: new FormControl('',Validators.required),
    medicData: new FormControl('',Validators.required),
  });

  roles: Roles[] = [];

  constructor(
    private usersService: UsersService
  ){
    super();
  }

  ngOnInit(): void {
      this.usersService.getRoles();

      this.usersService.getData$().subscribe({
        next: (response: any) => {
          if(response){
            this.roles = response;
          }
        }
      })
  }

  sendFormDate(): void{
    this.formValid.emit(this.formEmployePartTwo);
  }

}
