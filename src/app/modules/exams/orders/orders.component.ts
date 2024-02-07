import { Component, OnInit } from '@angular/core';
import { ColumnDef } from 'src/app/core/interface/shared/columnDef';
import { columns, displayedColumns } from './orders.data';
import { OrdersService } from 'src/app/core/services/orders/orders.service';
import { takeUntil } from 'rxjs';
import { BaseComponent } from '../../base/base.component';
import { Orders } from 'src/app/core/interface/orders/orders';
import { Location } from '@angular/common';
import { FilterState } from 'src/app/core/state/tabla/filter.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl:'./orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent extends BaseComponent implements OnInit { 

  dataOrders: Orders[] = [];
  displayedColumns: string[] = displayedColumns;
  columns: ColumnDef[] = columns;
  filter: string = '';

  constructor(
    private orderService: OrdersService,
    private location: Location,
    private filterState: FilterState,
    private route: Router
  ){
    super()
  }

  ngOnInit(): void {
    this.orderService.getOrders();

    this.orderService.getData$()
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe({
      next:(response: Orders[]) => {
        this.dataOrders = response;
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
    this.route.navigate(['home/examenes/set-examns'])
  }
}
