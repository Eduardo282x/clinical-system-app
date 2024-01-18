import { Injectable } from '@angular/core';
import { DataUser } from '../interface/BaseResponse';
import { Clients } from '../interface/clients/clients';

@Injectable({
  providedIn: 'root'
})
export class PayloadService {

  constructor() { }

  getDataLocalStorage(): DataUser {
    return JSON.parse(localStorage.getItem('userData') ?? '{}');
  }

  getClietnDataLocalStorage(): Clients {
    return JSON.parse(localStorage.getItem('client') ?? '{}');
  }

}
