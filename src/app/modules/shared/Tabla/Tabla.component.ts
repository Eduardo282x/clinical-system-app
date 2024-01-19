import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnDef } from 'src/app/core/interface/shared/columnDef';
import { EmitAction } from 'src/app/core/interface/tabla/emitAction';
import { FilterState } from 'src/app/core/state/tabla/filter.state';

@Component({
  selector: 'app-tabla',
  templateUrl: './Tabla.component.html',
  styleUrls: ['./Tabla.component.css'],
})
export class TablaComponent implements OnInit, AfterViewInit, OnChanges{

  @Input() displayedColumns: string[] = [];
  @Input() columns: ColumnDef[] = [];
  @Input() dataTable: any;

  @Output() actionTable = new EventEmitter<EmitAction>();
  pageSizeOptions: number[] = [4, 5, 10, 25, 100];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private filterState: FilterState,
    private labelPaginator: MatPaginatorIntl,
    private cdr: ChangeDetectorRef,
  ) {

  }

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.labelPaginator.itemsPerPageLabel = 'Registros por pagina'
    if (this.dataTable != null) {
      this.dataSource = new MatTableDataSource<any>(this.dataTable);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    this.filterState.getState$().subscribe({
      next: (filter: any) => {
        if (filter) {
          this.dataSource.filter = filter.trim().toLowerCase();
          if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
          }
        }
      }
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['dataTable']?.currentValue){
      this.dataSource = new MatTableDataSource<any>(this.dataTable);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
    this.dataSource = new MatTableDataSource<any>(this.dataTable);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getDataRows(data: any, columnData: string): void {
    const dataEmit: EmitAction = { action: columnData, data: data};
    this.actionTable.emit(dataEmit)
  }
}
