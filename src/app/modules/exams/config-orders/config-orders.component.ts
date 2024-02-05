import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { ExamnsService } from 'src/app/core/services/examns/examns.service';
import { takeUntil } from 'rxjs';
import { columns, displayedColumns } from './config-orders.component.data';
import { ColumnDef } from 'src/app/core/interface/shared/columnDef';
import { Examns } from 'src/app/core/interface/examns/examns';
import { FilterState } from 'src/app/core/state/tabla/filter.state';
import { Location } from '@angular/common';

@Component({
  selector: 'app-config-orders',
  templateUrl:'./config-orders.component.html',
  styleUrls: ['./config-orders.component.css'],
})
export class ConfigOrdersComponent extends BaseComponent implements OnInit { 

  dataExamns: Examns[] = [];
  displayedColumns: string[] = displayedColumns;
  columns: ColumnDef[] = columns;
  filter: string = '';
  
  constructor(
    private examns: ExamnsService,
    private filterState: FilterState,
    private location: Location
  )
  {
    super()
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

  
  applyFilter(event: Event) {
    this.filter = (event.target as HTMLInputElement).value;
    this.filterState.setState(this.filter);
  }

  goBack(): void {
    this.location.back();
  }

  getActionTable(event: any): void {
    console.log(event);
  }
}
