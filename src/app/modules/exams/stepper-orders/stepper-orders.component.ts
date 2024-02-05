import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ExamnsService } from 'src/app/core/services/examns/examns.service';
import { takeUntil } from 'rxjs';
import { Examns } from 'src/app/core/interface/examns/examns';
import { displayedColumns, columns, dataform } from './stepper-order.data';
import { FormDialog } from 'src/app/core/interface/form-dialog/form-dialog';
import { ColumnDef } from 'src/app/core/interface/shared/columnDef';

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
  dataExamns: Examns[] = [];

  displayedColumns: string[] = displayedColumns;
  columns: ColumnDef[] = columns;
  dataFormGeneric: FormDialog = dataform;

  totalExamns: number= 18;
  constructor(
    private examns: ExamnsService
  ) {
    super();
  }

  ngOnInit(): void {

    this.examns.getExamns();
    
    this.examns.getData$()
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe({
      next: (response: Examns[]) => {
        this.dataExamns = response;
      }
    })
  }

  goStepper(stepper: MatStepper): void {
    stepper.next();
  }
  backStepper(stepper: MatStepper): void {
    stepper.previous()
  }

  getActionTable(data: any): void{
    console.log(data);
    
  }
}
