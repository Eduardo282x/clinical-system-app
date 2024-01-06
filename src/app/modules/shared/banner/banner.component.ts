import { Component, Input, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Route, Router } from '@angular/router';
import { Banner } from 'src/app/core/interface/banner/banner';
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

  constructor(
    private loginService: LoginService,
    private bannerState: BannerState,
    private _router: Router
  ){}

  ngOnInit(): void {
    this.bannerState.getState$().subscribe({
      next: (banner) => {
        console.log(banner);
        if(banner){
          this.banner = banner;
        }
      }
    })
  }

  tabChange(event: MatTabChangeEvent): void {
    console.log(event.tab.textLabel);
  }

  redirect(): void{
    this._router.navigate(['/help'])
  }

  logout(): void{
    this.loginService.logout();
    this._router.navigate(['/'])
  }
}
