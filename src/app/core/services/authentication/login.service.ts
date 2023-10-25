import { Injectable } from '@angular/core';
import { Login } from '../../interface/login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  validateUser(dataUser: Login): void{
    localStorage.setItem('userData',JSON.stringify(dataUser));
  }

  logout(): void {
    localStorage.removeItem('userData');
  }
}
