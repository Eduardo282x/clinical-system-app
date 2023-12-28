import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Snackbar } from 'src/app/core/interface/snackbar/snackbar';
import { SnackBarComponent } from '../../shared/snack-bar/snack-bar.component';
import { Router } from '@angular/router';
import { RecuperarService } from 'src/app/core/services/authentication/recuperar.service';
import { Recuperar } from 'src/app/core/interface/recuperar';
import { Login } from 'src/app/core/interface/login/login';
import { LoginService } from 'src/app/core/services/authentication/login.service';

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
    text1: '',
    text2: '',
    typeText1: '',
    typeText2:''
  };

  dataUser:Login[] = [
    {username:'admin',password:'admin', name:'Admin',rol:'Administrador'},
    {username:'admin2',password:'admin2',name: 'Aixa', rol:'Directora'},
    {username:'admin3',password:'admin3',name: 'Eduardo', rol:'Sistemas'},
  ];

  footerData: string[] = [
    'Diseñado por ACH Systems "Sistemas a tu medida"',
    'J-40658132-1 ',
    '2023 ©Todos los derechos reservados ',
    '¡Siguenos! @achsystems ',
    '+58 261-732-1543 ',
    'Zulia Venezuela',
  ];

  constructor (
    private _snackBar: MatSnackBar,
    private _router: Router,
    private recuperarService: RecuperarService,
    private loginService: LoginService
    )
  {}

  ngOnInit(): void {

  }

  visibility(): void{
    this.hidden = !this.hidden;
  }

  onLoggin(): void{
    const data: Login = {
      username: this.formLogin.get('user')?.value,
      password: this.formLogin.get('password')?.value,
    }
    const userFind = this.dataUser.find(us => us.username == data.username && us.password == data.password);
    if(userFind)
    {
      const dataSnackbar: Snackbar = {
        message: "Bienvenido",
        success: true
      }

      this._snackBar.openFromComponent(SnackBarComponent,{
        duration: 2000,
        data: dataSnackbar
      });
      
      this.loginService.validateUser(userFind);

      this._router.navigate(['/home']);
    } else {
      const dataSnackbarError: Snackbar = {
        message: "Usuario Invalido",
        success: false
      }
      this._snackBar.openFromComponent(SnackBarComponent,{
        duration: 2000,
        data: dataSnackbarError
      });
    }
  }

  redirect(route: string): void {
    if(route == 'password'){
      this.recuperarData = {
        title: 'Recuperar Contraseña',
        text1: 'Ingrese la nueva Contraseña',
        text2: 'Confirma la nueva Contraseña',
        typeText1: 'password',
        typeText2: 'password',
      }
    }
    else if(route == 'user') {
      this.recuperarData = {
        title: 'Recuperar Usuario',
        text1: 'Ingrese el nuevo nombre de usuario',
        text2: 'Confirma el nombre de usuario',
        typeText1: 'text',
        typeText2: 'text',
      }
    }  
    this.recuperarService.setDataState(this.recuperarData);

    this._router.navigate([route == 'help' ? '/help' : '/recuperar']);
  }

}
