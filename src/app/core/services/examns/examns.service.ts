import { Injectable } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { environment } from 'src/env/enviroment';
import { HttpClient } from '@angular/common/http';
import { Examns } from '../../interface/examns/examns';
import { ExamnsState } from '../../state/examns/examns.state';
import { BaseResponse } from '../../interface/BaseResponse';
import { BaseResponseState } from '../../state/base-response';

@Injectable({
    providedIn: 'root'
})
export class ExamnsService {
    private ENDPOINT = `${environment.url}examns`;
    private UPDATE = `${this.ENDPOINT}/update`;
    private unsubscribe = new Subject<void>;

    constructor(
        private state: ExamnsState,
        private stateResponse: BaseResponseState,
        private http: HttpClient,
    ) { }

    getData$(): Observable<Examns[] | any> {
        return this.state.getState$();
    }
    getResponse$(): Observable<BaseResponse | any> {
        return this.stateResponse.getState$();
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

    updateExamns(examn: any): void {
        this.http.post<any>(this.UPDATE, examn)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe({
                next: (response: any) => {
                    this.stateResponse.setState(response);
                },
                error(err) {
                    console.log(err);
                },
                complete:() => {
                    this.getExamns();
                    // console.log('Complete');
                },
            })
    }
}
