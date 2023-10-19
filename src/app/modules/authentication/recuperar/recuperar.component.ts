import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recuperar } from 'src/app/core/interface/recuperar';
import { RecuperarService } from 'src/app/core/services/recuperar.service';

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
    newPass:     new FormControl('', [Validators.required]),
  });

  footerData: string[] = [
    'Diseñado por ACH Systems "Sistemas a tu medida"',
    'J-40658132-1 ',
    '2023 ©Todos los derechos reservados ',
    '¡Siguenos! @achsystems ',
    '+58 261-732-1543 ',
    'Zulia Venezuela',
  ];

  recuperar: Recuperar = {
    title: 'Recuperar',
    text1: '',
    text2: '',
    typeText1: '',
    typeText2:''
  };

  constructor(
    private recuperarService: RecuperarService,
    private _router: Router
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

  back(): void{
    this._router.navigate(['/'])
  }
}
