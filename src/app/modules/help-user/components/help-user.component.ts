import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-user',
  templateUrl: './help-user.component.html',
  styleUrls: ['./help-user.component.css']
})
export class HelpUserComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private _router: Router,
    private _location: Location
  ){
    this.matIconRegistry.addSvgIcon(
      "whatsapp",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/SVGs/Whatsapp.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "call",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/SVGs//Call.svg")
    );
  }

  footerData: string[] = [
    'Diseñado por ACH Systems "Sistemas a tu medida"',
    'J-40658132-1 ',
    '2023 ©Todos los derechos reservados ',
    '¡Siguenos! @achsystems ',
    '+58 261-732-1543 ',
    'Zulia Venezuela',
  ];


  ngOnInit(): void {
      
  }

  back(): void{
    this._location.back();
  }
}
