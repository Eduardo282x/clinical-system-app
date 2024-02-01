import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable, takeUntil } from 'rxjs';
import { environment } from 'src/env/enviroment';
import { Clients } from '../../interface/clients/clients';
import { ClientsState } from '../../state/clients/clients.state';
import { ServicesState } from '../../state/services/services.state';
import { EditService, Services } from '../../interface/services/services';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private ENDPOINT = `${environment.url}services`;
  private AVALIBLE = `${this.ENDPOINT}/avalibles`;
  private UPDATE = `${this.ENDPOINT}/update`;
  private unsubscribe = new Subject<void>;
  
  constructor(
    private state: ServicesState,
    private http: HttpClient,
  ) { }

  getData$(): Observable<Services | any>{
    return this.state.getState$();
  }
  clearData(): void{
    this.state.clearState();
  }

  getServices(): void {
    this.http.get<Services>(this.ENDPOINT)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: any) => {
        console.log(response);
        
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

  getServicesAvalibles(): void {
    this.http.get<Services>(this.AVALIBLE)
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

  updateServices(prueba: EditService): void {
    this.http.post<any>(this.UPDATE, prueba)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: any) => {
        this.state.setState(response);
      },
      error(err) {
          console.log(err);
      },
      complete:() => {
        this.getServices();
          // console.log('Complete');
      },
    })
  }
}
