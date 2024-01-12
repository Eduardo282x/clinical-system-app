import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-configuration',
  templateUrl: './Configuration.component.html',
  styleUrls: ['./Configuration.component.css'],
})
export class ConfigurationComponent implements OnInit{
  
  seletedModule: boolean = true;
  moduleString: string = ''

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private _router: Router
  ) {
    this.matIconRegistry.addSvgIcon(
      "clientes",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/SVGs/clientes.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "pruebas",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/SVGs/pruebas.svg')
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
