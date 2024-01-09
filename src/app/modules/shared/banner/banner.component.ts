import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { DomSanitizer } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';
import { Banner } from 'src/app/core/interface/banner/banner';
import { Menu } from 'src/app/core/interface/menuOption/MenuOption';
import { LoginService } from 'src/app/core/services/authentication/login.service';
import { BannerState } from 'src/app/core/state/banner/bannes.state';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  banner: Banner = {
    nameModule: '',
    existName: false,
  }

  panelOpenState: boolean = false;

  menu: Menu[] = [ 
    {
      title: 'Modulo de Empleados',
      icon: '',
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
      icon: ''
    },
    {
      title:'Modulo de Exámenes',
      icon: ''
    },
    {
      title:'Carga de Resultados',
      icon: ''
    },
  ]

  constructor(
    private loginService: LoginService,
    private bannerState: BannerState,
    private _router: Router,
    private cdr: ChangeDetectorRef,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
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
  }

  ngOnInit(): void {
    this.cdr.detectChanges();

    this.bannerState.getState$().subscribe({
      next: (banner) => {
        if(banner){
          this.banner = banner;
        }
      }
    })
  }

  tabChange(event: MatTabChangeEvent): void {
    // console.log(event.tab.textLabel);
  }

  redirect(): void{
    this._router.navigate(['/help'])
  }

  navigate(route: string): void {
    console.log(route);
    
    this._router.navigate([route])
  }

  logout(): void{
    this.loginService.logout();
    this._router.navigate(['/'])
  }
}
