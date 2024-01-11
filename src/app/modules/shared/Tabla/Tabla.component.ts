import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnDef } from 'src/app/core/interface/shared/columnDef';
import { FilterState } from 'src/app/core/state/tabla/filter.state';

@Component({
  selector: 'app-tabla',
  templateUrl: './Tabla.component.html',
  styleUrls: ['./Tabla.component.css'],
})
export class TablaComponent implements OnInit, AfterViewInit {

  @Input() displayedColumns: string[] = [];
  @Input() columns: ColumnDef[] = [];
  @Input() dataTable: any;
  pageSizeOptions: number[] = [3,5, 10, 25, 100];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private filterState: FilterState
  ) {

  }

  ngOnInit(): void {
    if(this.dataTable != null){
      this.dataSource = new MatTableDataSource<any>(this.dataTable);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    this.filterState.getState$().subscribe({
      next: (filter: any) => {
        // console.log(filter);
        this.dataSource.filter = filter.trim().toLowerCase();
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getDataRows(data: any): void{
    console.log(data);
    
  }

  

}
