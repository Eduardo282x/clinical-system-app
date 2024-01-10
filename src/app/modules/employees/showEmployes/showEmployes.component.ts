import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SortEmploye } from 'src/app/core/interface/employes/employe';
import { EmployesService } from 'src/app/core/services/employes/employes.service';

@Component({
  selector: 'app-show-employes',
  templateUrl: './showEmployes.component.html',
  styleUrls: ['./showEmployes.component.css'],
})
export class ShowEmployesComponent implements OnInit{
  @Output() goBack = new EventEmitter<boolean>();

  displayedColumns: string[] = ['Id', 'NameFull'];
  dataSource: MatTableDataSource<SortEmploye> = new MatTableDataSource<SortEmploye>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private employesService: EmployesService
  ){}

    ngOnInit(): void {
      this.employesService.getEmployes();

      this.employesService.getData$()
      .subscribe({
        next: (users: any) => {
          console.log(users);
          if(users){
            this.dataSource= new MatTableDataSource(users);
          }
        }
      })
    }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    goBackEmploye(): void {
      this.goBack.emit(true);
    }
}
