import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable, takeUntil } from 'rxjs';
import { environment } from 'src/env/enviroment';
import { ClientsState } from '../../state/clients/clients.state';
import { Clients, ClientsCompleted, OneClient } from '../../interface/clients/clients';
import { registerGeneric } from '../../interface/form-generic/formGeneric';
import { BaseResponseState } from '../../state/base-response';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private ENDPOINT = `${environment.url}clients`;
  private GETCLIENT = `${this.ENDPOINT}/one`;
  private GETALLCLIENT = `${this.ENDPOINT}/oneAll`;
  private DELETECLIENT = `${this.ENDPOINT}/delete`;
  private ADDCLIENT = `${this.ENDPOINT}/add`;
  private EDITCLIENT = `${this.ENDPOINT}/update`;
  private unsubscribe = new Subject<void>;
  
  constructor(
    private stateReponse: BaseResponseState,
    private state: ClientsState,
    private http: HttpClient,
  ) { }

  getData$(): Observable<Clients | ClientsCompleted | any>{
    return this.state.getState$();
  }
  getResponse$(): Observable<Clients | ClientsCompleted | any>{
    return this.stateReponse.getState$();
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

  postClient(client: ClientsCompleted): void {
    this.http.post<ClientsState>(client.IdClients ? this.EDITCLIENT : this.ADDCLIENT, client)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: any) => {
        this.stateReponse.setState(response);
      },
      error(err) {
          console.log(err);
      },
      complete() {
          // console.log('Complete');
      },
    })
  }

  getAllOneClient(clientId: any): void {
    this.http.post<ClientsState>(this.GETALLCLIENT,clientId)
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
  getOneClient(clientId: any): void {
    this.http.post<ClientsState>(this.GETCLIENT,clientId)
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
  deleteClient(clientIdentify: any): void {
    this.http.post<ClientsState>(this.DELETECLIENT,clientIdentify)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: any) => {
        this.state.setState(response);
      },
      error(err) {
          console.log(err);
      },
      complete: () =>{
        this.getClient();
          // console.log('Complete');
      },
    })
  }
}
