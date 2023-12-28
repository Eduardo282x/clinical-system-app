import { Injectable } from '@angular/core';
import { DataUser } from '../interface/BaseResponse';

@Injectable({
  providedIn: 'root'
})
export class PayloadService {

  constructor() { }

  getDataLocalStorage(): DataUser {
    return JSON.parse(localStorage.getItem('userData') ?? '{}');
  }

}
