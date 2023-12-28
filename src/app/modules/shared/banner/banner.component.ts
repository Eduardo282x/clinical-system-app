import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/authentication/login.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private _router: Router
  ){}

  ngOnInit(): void {
      
  }

  redirect(): void{
    this._router.navigate(['/help'])
  }

  logout(): void{
    this.loginService.logout();
    this._router.navigate(['/'])
  }
}
