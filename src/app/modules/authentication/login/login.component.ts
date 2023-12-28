import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Snackbar } from 'src/app/core/interface/snackbar/snackbar';
import { SnackBarComponent } from '../../shared/snack-bar/snack-bar.component';
import { Router } from '@angular/router';
import { RecuperarService } from 'src/app/core/services/authentication/recuperar.service';
import { Recuperar, RecuperarData } from 'src/app/core/interface/recuperar';
import { Login } from 'src/app/core/interface/login/login';
import { LoginService } from 'src/app/core/services/authentication/login.service';
import { footerData } from '../../shared/dataShared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hidden: boolean = true;
  durationInSeconds = 5;
  formLogin: FormGroup = new FormGroup({
    user:     new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  recuperarData: Recuperar = {
    title: '',
    typeText: '',
    data: []
  };

  footerData: string[] = footerData

  constructor (
    private _snackBar: MatSnackBar,
    private _router: Router,
    private recuperarService: RecuperarService,
    private loginService: LoginService
    )
  {}

  ngOnInit(): void {
    this.loginService.getData$().subscribe({
      next: (response) => {
        if(response){
          const dataSnackbar: Snackbar = {
            message: response.message,
            success: response.success
          }
      
          this._snackBar.openFromComponent(SnackBarComponent,{
            duration: 2000,
            data: dataSnackbar
          });

          if(response.success== true){
            setTimeout(() => {
              this._router.navigate(['/home']);
            }, 1500);
          }
        }
      }
    })
  }

  visibility(): void{
    this.hidden = !this.hidden;
  }

  onLoggin(): void{
    const data: Login = {
      Username: this.formLogin.get('user')?.value,
      Password: this.formLogin.get('password')?.value,
    }
    this.loginService.validateUser(data);
  }

  redirect(route: string): void {
    const data: RecuperarData[] = [ 
      {
        text: route == 'user' ? 'Ingrese el nuevo nombre de usuario' : 'Ingrese la nueva Contraseña',
        formControl: 'new'
      },
      {
        text: route == 'user' ? 'Confirma el nombre de usuario' : 'Confirma la nueva Contraseña',
        formControl: 'confirm'
      }
    ]
    this.recuperarData = {
      title: route == 'user' ? 'Recuperar Usuario' : 'Recuperar Contraseña',
      typeText: route == 'user' ? 'text' : 'password',
      data: data
    }
    this.recuperarService.setDataState(this.recuperarData);
    this._router.navigate([route == 'help' ? '/help' : '/recuperar']);
  }
}
