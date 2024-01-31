import { Injectable } from '@angular/core';
import { Login } from '../../interface/login/login';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/env/enviroment';
import { Observable, Subject, takeUntil } from 'rxjs';
import { BaseResponse, ReponseLogin } from '../../interface/BaseResponse';
import { BaseResponseState } from '../../state/base-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private ENDPOINT = `${environment.url}authentication`;
  private unsubscribe = new Subject<void>;

  constructor(
    private http: HttpClient,
    private state: BaseResponseState
  ) { }

  getData$(): Observable<BaseResponse | null>{
    return this.state.getState$();
  }
  clearData(): void{
    this.state.clearState();
  }

  validateUser(dataUser: Login): void {
    this.http.post<ReponseLogin>(this.ENDPOINT, dataUser)
    .pipe(takeUntil(this.unsubscribe))

    .subscribe({
      next: (response: ReponseLogin) => {
        if (response.success) {
          localStorage.setItem('userData', JSON.stringify(response.userData));
        }
        this.state.setState(response);
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('Complete');
      },
    })
    
  }

  logout(): void {
    this.state.clearState();
    localStorage.removeItem('userData');
  }
}
