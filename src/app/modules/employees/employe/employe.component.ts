import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeComponent implements OnInit {

  seletedModule: boolean = true;
  moduleString: string = ''

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private _router: Router
  ) {
    this.matIconRegistry.addSvgIcon(
      "lupa",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/SVGs/Lupa.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "folder",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/SVGs/FolderArchive.svg')
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
    // this._router.navigate(['/home/employes/employe/register'])
  }

}
