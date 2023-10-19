import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Snackbar } from 'src/app/core/interface/snackbar';
import { SnackBarComponent } from '../../shared/snack-bar/snack-bar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hidden: boolean = true;
  durationInSeconds = 5;
  formLogin = new FormGroup({
    user:     new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  dataUser:any[] = [
    {user:'admin',password:'admin'},
    {user:'admin2',password:'admin2'},
    {user:'admin3',password:'admin3'},
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
    private _router: Router)
  {}

  ngOnInit(): void {

  }

  visibility(): void{
    this.hidden = !this.hidden;
  }

  onLoggin(): void{
    const data= {
      user: this.formLogin.get('user')?.value,
      password: this.formLogin.get('password')?.value,
    }
    if(this.dataUser.find(us => us.user == data.user && us.password == data.password))
    {
      const dataSnackbar: Snackbar = {
        message: "Bienvenido",
        success: true
      }

      this._snackBar.openFromComponent(SnackBarComponent,{
        duration: 2000,
        data: dataSnackbar
      });

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
}
