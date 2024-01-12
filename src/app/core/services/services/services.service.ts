import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable, takeUntil } from 'rxjs';
import { environment } from 'src/env/enviroment';
import { Clients } from '../../interface/clients/clients';
import { ClientsState } from '../../state/clients/clients.state';
import { ServicesState } from '../../state/services/services.state';
import { Services } from '../../interface/services/services';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private ENDPOINT = `${environment.url}services`;
  private unsubscribe = new Subject<void>;
  
  constructor(
    private state: ServicesState,
    private http: HttpClient,
  ) { }

  getData$(): Observable<Services | null>{
    return this.state.getState$();
  }
  clearData(): void{
    this.state.clearState();
  }

  getEmployes(): void {
    this.http.get<Services>(this.ENDPOINT)
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
