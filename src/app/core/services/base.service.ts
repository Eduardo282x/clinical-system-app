import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseState } from '../state/base-state';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  protected state: any;
  constructor() { }

  getData$(): Observable<T | null>{
    return this.state.getState$();
  }

  clearData(): void{
    this.state.clearState();
  }
}
