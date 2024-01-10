import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Menu } from 'src/app/core/interface/menuOption/MenuOption';
import { PayloadService } from 'src/app/core/services/Payload.service';
import { FooterDataState } from 'src/app/core/state/footerData/footerData.state';

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

  menu: Menu[] = [ 
    {
      title: 'Modulo de Empleados',
      icon: 'usuario-check',
      children: [
        {
          title: 'Asistencia',
          icon:'empleados',
          redirect: '/home/employes/asistent'
        },
        {
          title: 'Imprimir',
          icon:'impresora',
          redirect: '/home/employes/seeAsistent'
        },
        {
          title: 'Gestión',
          icon:'asistencia',
          redirect: '/home/employes/employe'
        },
      ]
    },
    {
      title:'Modulo de Facturación',
      icon: 'usuario-pay'
    },
    {
      title:'Modulo de Exámenes',
      icon: 'investigate'
    },
    {
      title:'Carga de Resultados',
      icon: 'usuario-list'
    },
  ]

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
    
    this._router.navigate([route])
  }

  changeClass(): void {
    this.closed = !this.closed;
    this.myClass = this.closed ? '' : 'closed';
  }
}
