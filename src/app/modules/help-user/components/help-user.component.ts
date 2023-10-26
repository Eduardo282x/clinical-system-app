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
    private _router: Router
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


  ngOnInit(): void {
      
  }

  back(): void{
    this._router.navigate(['/'])
  }
}
