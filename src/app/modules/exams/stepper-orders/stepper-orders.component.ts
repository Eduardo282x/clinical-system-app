import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ExamnsService } from 'src/app/core/services/examns/examns.service';
import { takeUntil } from 'rxjs';
import { Examns } from 'src/app/core/interface/examns/examns';
import { displayedColumns, columns, dataform,  displayedColumnsWihtoutEdit,columnsWihtoutEdit,dataPreview, dataPreviewBio, displayedColumnsUronanalisis, columnsUronanalisis, dataUronanalisis, dataHeces, dataBio, displayedColumnsPreviewt, columnsPreview, dataExamns } from './stepper-order.data';
import { FormDialog } from 'src/app/core/interface/form-dialog/form-dialog';
import { ColumnDef } from 'src/app/core/interface/shared/columnDef';
import { FormGenericComponent } from '../../shared/form-generic/form-generic.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stepper-orders',
  templateUrl: './stepper-orders.component.html',
  styleUrls: ['./stepper-orders.component.css'],
})
export class StepperOrdersComponent  extends BaseComponent implements OnInit {

  stepOne: FormGroup = new FormGroup({})
  stepTwo: FormGroup = new FormGroup({})
  stepThree: FormGroup = new FormGroup({})
  stepFord: FormGroup = new FormGroup({})
  dataExamns: Examns[] = dataExamns;

  displayedColumns: string[] = displayedColumns;
  columns: ColumnDef[] = columns;

  dataPreview: any[] = dataPreview;
  dataPreviewBio: any[] = dataPreviewBio;
  dataComplete: any[] = [];
  displayedColumnsWihtoutEdit: string[] = displayedColumnsWihtoutEdit;
  columnsWihtoutEdit: ColumnDef[] = columnsWihtoutEdit;

  dataUronanalisis: any[] = dataUronanalisis;
  dataHeces: any[] = dataHeces;
  dataBio: any[] = dataBio;
  displayedColumnsUronanalisis: string[] = displayedColumnsUronanalisis;
  columnsUronanalisis: ColumnDef[] = columnsUronanalisis;

  displayedColumnsPreviewt: string[] = displayedColumnsPreviewt;
  columnsPreview: ColumnDef[] = columnsPreview;

  dataFormGeneric: FormDialog = dataform;

  totalExamns: number= 18;
  constructor(
    private examns: ExamnsService,
    private dialog: MatDialog,
    private _router: Router
  ) {
    super();
  }

  ngOnInit(): void {

    this.examns.getExamns();
    
    // this.examns.getData$()
    // .pipe(takeUntil(this.ngUnsubscribe))
    // .subscribe({
    //   next: (response: Examns[]) => {
    //     const data = response;
    //     data.map(item => item.Result = '');
    //     this.dataExamns = data;
    //     console.log(data);
        
    //   }
    // })
  }

  goStepper(stepper: MatStepper): void {
    stepper.next();
  }
  goStepperFinish(stepper: MatStepper): void {
    this.dataComplete = this.dataExamns.concat(this.dataUronanalisis,this.dataHeces,this.dataBio);
    console.log(this.dataComplete);
    
    stepper.next();
  }
  backStepper(stepper: MatStepper): void {
    stepper.previous()
  }

  redirect(): void {
    this._router.navigate(['/home/examenes/orders']);
  }

  getActionTable(data: any, table: string): void{
    const IdExamen = this.dataFormGeneric.dataForm.find(formControl => formControl.formControlName == 'Id');

    if(IdExamen){
      IdExamen.value = data.data.Id;
    }
    const diagloRef = this.dialog.open(FormGenericComponent, {
      data: this.dataFormGeneric,
      width: '30rem',
      height: '20rem'
    });

    diagloRef.afterClosed().subscribe(result => {
      console.log(result);
      let dataTemp: any[] = [];

      if(table == 'hema') {
        dataTemp = [...this.dataExamns]
      }
      if(table == 'uro') {
        dataTemp = [...this.dataUronanalisis]
      }
      if(table == 'heces') {
        dataTemp = [...this.dataHeces]
      }
      if(table == 'bio') {
        dataTemp = [...this.dataBio]
      }
      const findExamn = dataTemp.find(item => item.Id === result.Id);
      if(findExamn){
        findExamn.Result = result.Result;
      }
    })
  }
}
