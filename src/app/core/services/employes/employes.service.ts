import { Injectable } from '@angular/core';
import { EmployeState } from '../../state/employes/employe.state';
import { environment } from 'src/env/enviroment';
import { Observable, Subject, takeUntil } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employe, EmployesComplete, SortEmploye } from '../../interface/employes/employe';
import { BaseResponse } from '../../interface/BaseResponse';
import { EmployeAllState } from '../../state/employes/employeAll.state';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  private ENDPOINT = `${environment.url}employes`;
  private ASISTENT = `${this.ENDPOINT}/security`;
  private GETALLEMPLOYE = `${this.ENDPOINT}/getEmploye`;
  private GETASSISTENT = `${this.ENDPOINT}/assistent`;
  private ADDEMPLOYE = `${this.ENDPOINT}/add`;
  private EDITEMPLOYE = `${this.ENDPOINT}/edit`;
  private DELETEEMPLOYE = `${this.ENDPOINT}/delete`;
  private GETKEYS = `${this.ENDPOINT}/keys`;

  private unsubscribe = new Subject<void>;
  
  constructor(
    private state: EmployeState,
    private stateEmploye: EmployeAllState,
    private http: HttpClient,
  ) { }

  getData$(): Observable<Employe | any>{
    return this.state.getState$();
  }
  getDataEmploye$(): Observable<EmployesComplete | any>{
    return this.stateEmploye.getState$();
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
  getSecurityKeys(): void {
    this.http.get<string[]>(this.GETKEYS)
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
  getAssistent(dates: any): void {
    this.http.post<any>(this.GETASSISTENT, dates)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: any) => {
        console.log(response);
        
        // this.state.setState(response)
      },
      error(err) {
          console.log(err);
      },
      complete() {
          // console.log('Complete');
      },
    })
  }
  getAllDataEmploye(employeId: any): void {
    this.http.post<any>(this.GETALLEMPLOYE, employeId)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: EmployesComplete | any) => {
        this.stateEmploye.setState(response)
      },
      error(err) {
          console.log(err);
      },
      complete() {
          // console.log('Complete');
      },
    })
  }
  addNewEmploye(employeData: EmployesComplete): void {    
    this.http.post<Employe>(employeData.Id ? this.EDITEMPLOYE : this.ADDEMPLOYE, employeData)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: BaseResponse | any) => {
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
  editEmploye(employeData: any): void {
    this.http.post<Employe>(this.ADDEMPLOYE, employeData)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: BaseResponse | any) => {
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
  deleteEmploye(employeId: any): void {
    this.http.post<Employe>(this.DELETEEMPLOYE, employeId)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: BaseResponse | any) => {
        this.state.setState(response)
      },
      error(err) {
          console.log(err);
      },
      complete:() => {
        this.getEmployes();
          // console.log('Complete');
      },
    })
  }

}
