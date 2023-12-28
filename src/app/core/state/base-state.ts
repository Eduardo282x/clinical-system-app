import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class BaseState<T> {
    protected loadingState: BehaviorSubject<boolean> =
        new BehaviorSubject<boolean>(false);
    protected state: BehaviorSubject<T | any> = new BehaviorSubject<T | any>(
        null
    );

    public getState$(): Observable<T | null> {
        return this.state.asObservable();
    }

    public setState(state: T | null): void {
        this.state.next(state);
    }

    public clearState(): void {
        this.state.next(null);
    }

    public getLoading$(): Observable<boolean> {
        return this.loadingState.asObservable();
    }

    public setLoading(loading: boolean): void {
        this.loadingState.next(loading);
    }
}
