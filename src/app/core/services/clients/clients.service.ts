import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable, takeUntil } from 'rxjs';
import { environment } from 'src/env/enviroment';
import { ClientsState } from '../../state/clients/clients.state';
import { Clients, OneClient } from '../../interface/clients/clients';
import { registerGeneric } from '../../interface/form-generic/formGeneric';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private ENDPOINT = `${environment.url}clients`;
  private GETCLIENT = `${this.ENDPOINT}/one`;
  private ADDCLIENT = `${this.ENDPOINT}/add`;
  private unsubscribe = new Subject<void>;
  
  constructor(
    private state: ClientsState,
    private http: HttpClient,
  ) { }

  getData$(): Observable<Clients | any>{
    return this.state.getState$();
  }
  clearData(): void{
    this.state.clearState();
  }

  getClient(): void {
    this.http.get<ClientsState>(this.ENDPOINT)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: any) => {
        this.state.setState(response);
      },
      error(err) {
          console.log(err);
      },
      complete() {
          // console.log('Complete');
      },
    })
  }

  postClientAdd(client: registerGeneric): void {
    this.http.post<ClientsState>(this.ADDCLIENT,client)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: any) => {
        this.state.setState(response);
      },
      error(err) {
          console.log(err);
      },
      complete() {
          // console.log('Complete');
      },
    })
  }

  getOneClient(clientIdentify: OneClient): void {
    this.http.post<ClientsState>(this.GETCLIENT,clientIdentify)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: any) => {
        this.state.setState(response);
      },
      error(err) {
          console.log(err);
      },
      complete() {
          // console.log('Complete');
      },
    })
  }
}
