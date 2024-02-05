import { Injectable } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { environment } from 'src/env/enviroment';
import { HttpClient } from '@angular/common/http';
import { Examns } from '../../interface/examns/examns';
import { ExamnsState } from '../../state/examns/examns.state';

@Injectable({
    providedIn: 'root'
})
export class ExamnsService {
    private ENDPOINT = `${environment.url}examns`;
    private unsubscribe = new Subject<void>;

    constructor(
        private state: ExamnsState,
        private http: HttpClient,
    ) { }

    getData$(): Observable<Examns[] | any> {
        return this.state.getState$();
    }
    clearData(): void {
        this.state.clearState();
    }

    getExamns(): void {
        this.http.get<Examns>(this.ENDPOINT)
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
