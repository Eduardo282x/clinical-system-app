import { Injectable } from '@angular/core';
import { TempFactureState } from '../../state/facture/tempFacture.state';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, takeUntil } from 'rxjs';
import { environment } from 'src/env/enviroment';
import { NewTempFacture, TempFacture } from '../../interface/facture/tempFacture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private ENDPOINT = `${environment.url}facture`;
  private TEMP = `${this.ENDPOINT}/temp`;
  private ADDTEMP = `${this.ENDPOINT}/addtemp`;
  private EDITTEMP = `${this.ENDPOINT}/update`;
  private DELETETEMP = `${this.ENDPOINT}/delete`;
  private unsubscribe = new Subject<void>;

  constructor(
    private stateTempFacture: TempFactureState,
    private http: HttpClient,
  ) { }

  getData$(): Observable<any>{
    return this.stateTempFacture.getState$();
  }
  clearData(): void{
    this.stateTempFacture.clearState();
  }

  getTempFacture(IdUser: number): void {
    this.http.get<TempFacture>(`${this.TEMP}?IdUser=${IdUser}`)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: any) => {
        this.stateTempFacture.setState(response);
      },
      error(err) {
          console.log(err);
      },
      complete() {
          // console.log('Complete');
      },
    })
  }
  postAddTempFacture(newService: NewTempFacture): void {
    this.http.post<any>(this.ADDTEMP, newService)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error(err) {
          console.log(err);
      },
      complete: () => {
        this.getTempFacture(newService.IdUser);
          // console.log('Complete');
      },
    })
  }
  updateTempFacture(newService: NewTempFacture): void {
    this.http.post<any>(this.EDITTEMP, newService)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error(err) {
          console.log(err);
      },
      complete: () => {
        this.getTempFacture(newService.IdUser);
          // console.log('Complete');
      },
    })
  }
  deleteTempFacture(newService: NewTempFacture): void {
    this.http.post<any>(this.DELETETEMP, newService)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error(err) {
          console.log(err);
      },
      complete:() => {
        console.log(newService);
        
        this.getTempFacture(newService.IdUser);
          // console.log('Complete');
      },
    })
  }
}
