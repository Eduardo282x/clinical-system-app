import { Injectable } from '@angular/core';
import { EmployeState } from '../../state/employes/employe.state';
import { environment } from 'src/env/enviroment';
import { Observable, Subject, takeUntil } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employe, SortEmploye } from '../../interface/employes/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  private ENDPOINT = `${environment.url}employes`;
  private ASISTENT = `${this.ENDPOINT}/security`;

  private unsubscribe = new Subject<void>;
  
  constructor(
    private state: EmployeState,
    private http: HttpClient,
  ) { }

  getData$(): Observable<Employe | null>{
    return this.state.getState$();
  }
  clearData(): void{
    this.state.clearState();
  }

  getEmployes(): void {
    this.http.get<SortEmploye>(this.ENDPOINT)
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

  getSecurityKeyEmployedApi(securityKey: any): void {
    this.http.post<Employe>(this.ASISTENT, securityKey)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: Employe) => {
        this.state.setState(response)
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
