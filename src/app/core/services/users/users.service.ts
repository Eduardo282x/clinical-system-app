import { Injectable } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { environment } from 'src/env/enviroment';
import { Roles } from '../../interface/users/users';
import { HttpClient } from '@angular/common/http';
import { RolesState } from '../../state/users/roles.state';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
  private ENDPOINT = `${environment.url}users`;
  private ROLES = `${this.ENDPOINT}/roles`;

  private unsubscribe = new Subject<void>;
  
  constructor(
    private stateRoles: RolesState,
    private http: HttpClient,
  ) { }

  getData$(): Observable<Roles[] | any>{
    return this.stateRoles.getState$();
  }
  clearData(): void{
    this.stateRoles.clearState();
  }

  getRoles(): void {
    this.http.get<Roles>(this.ROLES)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (response: any) => {
        this.stateRoles.setState(response.response);
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
