import { Injectable } from '@angular/core';
import { TempFactureState } from '../../state/facture/tempFacture.state';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, takeUntil } from 'rxjs';
import { environment } from 'src/env/enviroment';
import { NewTempFacture, TempFacture } from '../../interface/facture/tempFacture';
import { BanksState } from '../../state/facture/banks.state';
import { PaymentsState } from '../../state/facture/payment.state';
import { FacturesState } from '../../state/facture/facture.state';
import { BodyFacture } from '../../interface/facture/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private ENDPOINT = `${environment.url}facture`;
  private ADD = `${this.ENDPOINT}/add`;
  private TEMP = `${this.ENDPOINT}/temp`;
  private BANKS = `${this.ENDPOINT}/banks`;
  private PAYMENTS = `${this.ENDPOINT}/payment`;
  private ADDTEMP = `${this.ENDPOINT}/addtemp`;
  private EDITTEMP = `${this.ENDPOINT}/update`;
  private DELETETEMP = `${this.ENDPOINT}/delete`;
  private DELETEFACTURE = `${this.ENDPOINT}/deleteFacture`;
  private unsubscribe = new Subject<void>;

  constructor(
    private state: FacturesState,
    private stateTempFacture: TempFactureState,
    private stateBanks: BanksState,
    private statePayments: PaymentsState,
    private http: HttpClient,
  ) { }

  getFactureData$(): Observable<any>{
    return this.state.getState$();
  }
  getData$(): Observable<any>{
    return this.stateTempFacture.getState$();
  }
  getBanksData$(): Observable<any>{
    return this.stateBanks.getState$();
  }
  getPaymentsData$(): Observable<any>{
    return this.statePayments.getState$();
  }
  clearData(): void{
    this.stateTempFacture.clearState();
  }

  getFactures(): void {
    this.http.get<any>(this.ENDPOINT)
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
  };

  postAddFacture(newFacture: BodyFacture): void {
    this.http.post<any>(this.ADD,newFacture)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: any) => {
        if(response){
          // console.log(response);
        }
      },
      error(err) {
          console.log(err);
      },
      complete() {
          // console.log('Complete');
      },
    })
  }

  getTempFacture(IdUser: number, IdClients: number, IdFacture?: number): void {
    this.http.get<TempFacture>(IdFacture ? `${this.TEMP}?IdUser=${IdUser}&IdClient=${IdClients}&IdFacture=${IdFacture}` : `${this.TEMP}?IdUser=${IdUser}&IdClient=${IdClients}`)
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
  };

  getBanks(): void {
    this.http.get<any>(this.BANKS)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: any) => {
        this.stateBanks.setState(response);
      },
      error(err) {
          console.log(err);
      },
      complete() {
          // console.log('Complete');
      },
    })
  };

  getPayments(): void {
    this.http.get<TempFacture>(this.PAYMENTS)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: any) => {
        this.statePayments.setState(response);
      },
      error(err) {
          console.log(err);
      },
      complete() {
          // console.log('Complete');
      },
    })
  };

  postAddTempFacture(newService: NewTempFacture, IdClient: number): void {
    this.http.post<any>(this.ADDTEMP, newService)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: any) => {
        // console.log(response);
      },
      error(err) {
          console.log(err);
      },
      complete: () => {
        this.getTempFacture(newService.IdUser, IdClient);
          // console.log('Complete');
      },
    })
  };

  updateTempFacture(newService: NewTempFacture, IdClient: number): void {
    this.http.post<any>(this.EDITTEMP, newService)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: any) => {
        // console.log(response);
      },
      error(err) {
          console.log(err);
      },
      complete: () => {
        this.getTempFacture(newService.IdUser, IdClient);
          // console.log('Complete');
      },
    })
  };

  deleteTempFacture(newService: NewTempFacture, IdClient: number): void {
    this.http.post<any>(this.DELETETEMP, newService)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: any) => {
        // console.log(response);
      },
      error(err) {
          console.log(err);
      },
      complete:() => {
        // console.log(newService);
        
        this.getTempFacture(newService.IdUser, IdClient);
          // console.log('Complete');
      },
    })
  };

  deleteFacture(facture: any, userClient: any): void {
    this.http.post<any>(this.DELETEFACTURE, facture)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error(err) {
          console.log(err);
      },
      complete:() => {
        setTimeout(() => {
          this.getTempFacture(userClient.IdUser, userClient.IdClient);
        }, 1500);
          // console.log('Complete');
      },
    })
  };
}
