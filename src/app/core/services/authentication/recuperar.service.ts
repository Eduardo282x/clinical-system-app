import { Injectable } from '@angular/core';
import { RecuperarState } from '../../state/recuperar/recuperar.state';
import { Observable } from 'rxjs';
import { Recuperar } from '../../interface/recuperar';

@Injectable({
  providedIn: 'root'
})
export class RecuperarService {

  constructor(private state: RecuperarState) { }

  getData$(): Observable<Recuperar | any>{
    return this.state.getState$();
  }

  setDataState(data: Recuperar): void {
    this.state.setState(data);
  }
}
