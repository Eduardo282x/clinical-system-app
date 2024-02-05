import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { ExamnsService } from 'src/app/core/services/examns/examns.service';
import { takeUntil } from 'rxjs';
import { columns, displayedColumns, dataform } from './config-orders.component.data';
import { ColumnDef } from 'src/app/core/interface/shared/columnDef';
import { Examns } from 'src/app/core/interface/examns/examns';
import { FilterState } from 'src/app/core/state/tabla/filter.state';
import { Location } from '@angular/common';
import { FormGenericComponent } from '../../shared/form-generic/form-generic.component';
import { FormDialog } from 'src/app/core/interface/form-dialog/form-dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../shared/snack-bar/snack-bar.component';
import { BaseResponse } from 'src/app/core/interface/BaseResponse';

@Component({
  selector: 'app-config-orders',
  templateUrl:'./config-orders.component.html',
  styleUrls: ['./config-orders.component.css'],
})
export class ConfigOrdersComponent extends BaseComponent implements OnInit { 

  dataExamns: Examns[] = [];
  displayedColumns: string[] = displayedColumns;
  columns: ColumnDef[] = columns;
  dataFormGeneric: FormDialog = dataform;
  filter: string = '';
  
  constructor(
    private examns: ExamnsService,
    private filterState: FilterState,
    private location: Location,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
  )
  {
    super()
  }

  ngOnInit(): void {
    this.examns.getExamns();

    this.examns.getResponse$()
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe({
      next: (response: BaseResponse) => {
        if(response){
          this._snackBar.openFromComponent(SnackBarComponent,{
            duration: 2000,
            data: response
          });
        }
      }
    })

    this.examns.getData$()
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe({
      next: (response: Examns[]) => {
        this.dataExamns = response;
      }
    })
  }

  updateOrder(order: any): void {
    const id = this.dataFormGeneric.dataForm.find(formControl => formControl.formControlName == 'Id');
    const descrip = this.dataFormGeneric.dataForm.find(formControl => formControl.formControlName == 'Description');
    const result = this.dataFormGeneric.dataForm.find(formControl => formControl.formControlName == 'Result');
    const unit = this.dataFormGeneric.dataForm.find(formControl => formControl.formControlName == 'Unit');
    const reference = this.dataFormGeneric.dataForm.find(formControl => formControl.formControlName == 'Reference');
    if (id && descrip && result && unit && reference) {
      id.value = order.Id;
      descrip.value = order.Description;
      result.value = order.Result;
      unit.value = order.Unit;
      reference.value = order.Reference;
    };

    const diagloRef = this.dialog.open(FormGenericComponent, {
      data: this.dataFormGeneric,
      width: '20rem',
      height: '30rem'
    });

    diagloRef.afterClosed().subscribe(result => {
      const order: any = {
        Id: result.Id,
        Description: result.Description,
        Result: result.Result,
        Unit: result.Unit,
        Reference: result.Reference,
      }
      this.orderUpdate(order);
    })
  }

  orderUpdate(data: any):void {
    this.examns.updateExamns(data);
  }

  
  applyFilter(event: Event) {
    this.filter = (event.target as HTMLInputElement).value;
    this.filterState.setState(this.filter);
  }

  goBack(): void {
    this.location.back();
  }

  getActionTable(event: any): void {
    console.log(event);
    this.updateOrder(event.data)
  }
}
