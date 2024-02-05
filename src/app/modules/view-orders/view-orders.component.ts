import { Component, OnInit } from '@angular/core';
import { ColumnDef } from 'src/app/core/interface/shared/columnDef';

import { OrdersService } from 'src/app/core/services/orders/orders.service';
import { takeUntil } from 'rxjs';

import { Orders } from 'src/app/core/interface/orders/orders';
import { Location } from '@angular/common';
import { FilterState } from 'src/app/core/state/tabla/filter.state';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { columns, displayedColumns } from './view-orders.data';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view-orders',
  templateUrl:'./view-orders.component.html',
  styleUrls: ['./view-orders.component.css'],
})
export class ViewOrdersComponent extends BaseComponent implements OnInit { 

  dataOrders: Orders[] = [];
  displayedColumns: string[] = displayedColumns;
  columns: ColumnDef[] = columns;
  filter: string = '';

  constructor(
    private orderService: OrdersService,
    private location: Location,
    private filterState: FilterState,
    private route: Router,
    private http: HttpClient,
  ){
    super()
  }

  ngOnInit(): void {

    this.orderService.getOrders();

    this.orderService.getData$()
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe({
      next:(response: Orders[]) => {
        this.dataOrders = [
            {
                IdOrders: 1,
                IdFacture: 42,
                Identify: "V29986990",
                NameFull: "Aixa"
            }
        ];
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
    this.http.get('assets/files/MODELO DE EXAMENES HINESTROZA FERRER C.A.pdf', { responseType: 'blob' }).subscribe((response) => {
      const url = window.URL.createObjectURL(response);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Examenes.pdf';
      a.click();
    });
  }
}
