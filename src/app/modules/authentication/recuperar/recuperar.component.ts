import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Recuperar } from 'src/app/core/interface/recuperar';
import { Snackbar } from 'src/app/core/interface/snackbar/snackbar';
import { RecuperarService } from 'src/app/core/services/authentication/recuperar.service';
import { SnackBarComponent } from '../../shared/snack-bar/snack-bar.component';
import { footerData } from '../../shared/dataShared';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {

  recuperarForm: FormGroup = new FormGroup({
    security:     new FormControl('', [Validators.required]),
  });

  userPassForm: FormGroup = new FormGroup({
    new:     new FormControl('', [Validators.required]),
    confirm:     new FormControl('', [Validators.required]),
  });

  passArray: boolean[] = [true, true]
  hidden: boolean = true;

  footerData: string[] = footerData

  recuperar: Recuperar = {
    title: 'Recuperar',
    typeText: '',
    data: []
  };

  constructor(
    private recuperarService: RecuperarService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    ){
  }

  ngOnInit(): void {
    this.recuperarService.getData$().subscribe({
      next: (recuperar: Recuperar) => {
        if(recuperar){
          this.recuperar = recuperar;
        }
      }
    })
  }

  visibility(index: number): void{
    this.passArray[index] = !this.passArray[index];
  }

  redirect(): void{
    const valid1 = this.userPassForm.get('new')?.value;
    const valid2 = this.userPassForm.get('confirm')?.value;

    if(valid1 == valid2){
      const dataSnackbar: Snackbar = {
        message: "Usuario Recuperado Existosamente",
        success: true
      }
      this._snackBar.openFromComponent(SnackBarComponent,{
        duration: 2000,
        data: dataSnackbar
      });
      setTimeout(() => {
        this._router.navigate(['/'])
      }, 2000);
    }
    else {
      const dataSnackbar: Snackbar = {
        message: "Las contraseñas no coinciden",
        success: false
      }
      this._snackBar.openFromComponent(SnackBarComponent,{
        duration: 2000,
        data: dataSnackbar
      });
    }
  }

  back(): void{
    this._router.navigate(['/'])
  }
}
