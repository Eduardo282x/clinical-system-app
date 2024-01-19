import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-facture',
  templateUrl: './choose-facture.component.html',
  styleUrls: ['./choose-facture.component.css'],
})
export class ChooseFactureComponent implements OnInit{
  
  seletedModule: boolean = true;
  moduleString: string = ''

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private _router: Router
  ) {
    this.matIconRegistry.addSvgIcon(
      "facturar",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/SVGs/facturar.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "anulacion",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/SVGs/anulacion.svg')
    );
  }

  ngOnInit(): void {
      
  }

  changeView(validate: boolean): void {
    this.seletedModule = validate;
    this.moduleString = '';
  }

  navigate(moduleString: string): void{
    this.seletedModule = false;
    this.moduleString = moduleString;
    this._router.navigate([moduleString])
  }
}