import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Menu } from 'src/app/core/interface/menuOption/MenuOption';
import { PayloadService } from 'src/app/core/services/Payload.service';
import { FooterDataState } from 'src/app/core/state/footerData/footerData.state';
import { menu } from './sidebatr.data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit{ 

  @Input() widthMenu: string = '';
  footerData: string[] = [];
  
  myClass: string = '';
  titleClass: string = 'titleArrow';
  closed: boolean = true;

  menu: Menu[] = menu

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private footerDataState: FooterDataState,
    private payloadService: PayloadService,
    private _router: Router
  ){
    this.matIconRegistry.addSvgIcon(
      "empleados",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/SVGs/Empleados.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "impresora",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/SVGs/Impresora.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "asistencia",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/SVGs/Asistencia.svg')
    );
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

    this.matIconRegistry.addSvgIcon(
      "facturas",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/SVGs/factura.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "presupuesto",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/SVGs/presupuesto.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "configuracion",
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/SVGs/configuracion.svg')
    );
  }

  ngOnInit(): void {
    const dataUser = this.payloadService.getDataLocalStorage();

    this.footerDataState.getState$().subscribe({
      next: (footerData: any) => {
        this.footerData = footerData;
      }
    })

    if(dataUser){
      const date = new Date();
      this.footerData = [
        'Bienvenido de Nuevo',
        `${dataUser.NameFull.toUpperCase()}`,
        `${dataUser.Rol}`,
        `Ultima vez: ${date.toLocaleDateString()}`,
        `${date.getFullYear()} ©Todos los derechos reservados.` ]
    }
  }

  navigate(route: string): void {
    console.log(route);
    if(route != ''){
      this._router.navigate([route])
    }
  }

  changeClass(deploy: Menu): void {
    const newMenu = this.menu.find(title => title.title == deploy.title);
    const oldMenu = this.menu.filter(title => title.title !== deploy.title);
    if(oldMenu){
      oldMenu.map(option => option.deploy = false);    
    }
    if(newMenu){
      newMenu.deploy = !newMenu.deploy;
    }
  }
}
