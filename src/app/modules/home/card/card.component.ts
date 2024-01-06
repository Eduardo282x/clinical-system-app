import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/core/interface/card/card';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private _router: Router
  )
  {
    this.matIconRegistry.addSvgIcon(
      "usuario-check",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/SVGs/UsuarioCheck.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "usuario-pay",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/SVGs/UsuarioPay.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "investigate",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/SVGs/Investigate.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "usuario-list",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/SVGs/UsuarioList.svg')
    );
  }

  @Input() card: Card = {name: '', icon: '', redirect: ''};

  ngOnInit(): void {
      
  }

  redirect(location: string): void{
    this._router.navigate([location]);
  }
}
