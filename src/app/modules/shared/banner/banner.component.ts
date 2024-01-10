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

  widthMenuChild: string = 'closeSidebar';
  openMenu: boolean = true;

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

  tabChange(event: MatTabChangeEvent): void {
    // console.log(event.tab.textLabel);
  }

  handleMenu(): void {
    this.openMenu = !this.openMenu;
    this.widthMenuChild = this.openMenu ? 'closeSidebar' : ''
  }

  redirect(): void{
    this._router.navigate(['/help'])
  }

  logout(): void{
    this.loginService.logout();
    this._router.navigate(['/'])
  }
}
