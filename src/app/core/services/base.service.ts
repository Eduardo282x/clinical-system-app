import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { BaseState } from '../state/base-state';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/env/enviroment';
import { RecursiveAstVisitor } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T, D extends BaseState<T>> {
  // private ENDPOINT_BASE_URL = `${environment.url}`;
  // private ENDPOINT_URL = `${environment.url}${this.route}`;
  // private unsubscribe = new Subject<void>;
  
  // constructor(
  //   private httpClient: HttpClient,
  //   private state: D,
  //   private route: string
  // ) { }

  // getDataApi(): void {
  //   this.httpClient.get(this.ENDPOINT_URL)
  //   .pipe(takeUntil(this.unsubscribe))
  //   .subscribe({
  //     next: (response: any){
  //       console.log(response);
  //     }
  //   })
  // }

  // public getLoader$(): Observable<boolean> {
  //   return this.state.getLoading$();
  // }

  // getData$(): Observable<T | null>{
  //   return this.state.getState$();
  // }

  // clearData(): void{
  //   this.state.clearState();
  // }
}
