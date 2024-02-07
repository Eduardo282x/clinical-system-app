import { Injectable } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { environment } from 'src/env/enviroment';
import { Roles } from '../../interface/users/users';
import { HttpClient } from '@angular/common/http';
import { OrdersState } from '../../state/orders/orders.state';
import { Orders } from '../../interface/orders/orders';

@Injectable({
    providedIn: 'root'
})
export class OrdersService {
    private ENDPOINT = `${environment.url}orders`;
    private unsubscribe = new Subject<void>;

    constructor(
        private state: OrdersState,
        private http: HttpClient,
    ) { }

    getData$(): Observable<Orders[] | any> {
        return this.state.getState$();
    }
    clearData(): void {
        this.state.clearState();
    }

    getOrders(): void {
        this.http.get<Roles>(this.ENDPOINT)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe({
                next: (response: any) => {
                    this.state.setState(response.response);
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
