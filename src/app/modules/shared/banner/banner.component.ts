import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/core/services/authentication/login.service';
import { BannerState } from 'src/app/core/state/banner/bannes.state';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Banner } from 'src/app/core/interface/banner/banner';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;
  widthMenuChild: string = 'closeSidebar';

  banner: Banner = {
    nameModule: '',
    existName: false,
  }

  constructor(
    private loginService: LoginService,
    private bannerState: BannerState,
    private _router: Router,
    private cdr: ChangeDetectorRef,
  ){
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

  closeMenu():void {
    this.widthMenuChild = 'closeSidebar';
    this.sidebar.closeAllMenu();
  }

  handleMenu(): void {
    this.widthMenuChild = 'closeSidebar' ? '' : 'closeSidebar';
  }

  redirect(): void{
    this._router.navigate(['/help'])
  }

  logout(): void{
    Swal.fire({
      title: "Estas seguro de cerrar sesión?",
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`
    }).then((result) => {
      if (result.isConfirmed) {
        this.loginService.logout();
        this._router.navigate(['/'])
      }
    })
  }
}
