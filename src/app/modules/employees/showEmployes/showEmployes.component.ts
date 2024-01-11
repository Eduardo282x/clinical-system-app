import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SortEmploye } from 'src/app/core/interface/employes/employe';
import { ColumnDef } from 'src/app/core/interface/shared/columnDef';
import { EmployesService } from 'src/app/core/services/employes/employes.service';
import { FilterState } from 'src/app/core/state/tabla/filter.state';

@Component({
  selector: 'app-show-employes',
  templateUrl: './showEmployes.component.html',
  styleUrls: ['./showEmployes.component.css'],
})
export class ShowEmployesComponent implements OnInit{

  displayedColumns: string[] = ['Id', 'NameFull','Show','Edit','Delete'];
  columns: ColumnDef[] = [
    {
      column: 'Id',
      header: 'Id',
      type: 'text',
    },
    {
      column: 'NameFull',
      header: 'Nombre completo',
      type: 'text',
      class: 'maxWidth',
    },
    {
      column: 'Show',
      header: 'Ver',
      icon: 'visibility',
      color: 'primary',
      isIcon: true,
    },
    {
      column: 'Edit',
      header: 'Editar',
      icon: 'edit',
      color: 'primary',
      isIcon: true,
    },
    {
      column: 'Delete',
      header: 'Borrar',
      icon: 'delete',
      color: 'warn',
      isIcon: true,
    }
  ];
  filter: string = '';
  dataSource: any;
  
  constructor(
    private employesService: EmployesService,
    private location:Location,
    private filterState: FilterState
  ){}

    ngOnInit(): void {
      this.employesService.getEmployes();

      this.employesService.getData$()
      .subscribe({
        next: (users: any) => {
          if(users){
            this.dataSource = users;
          }
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
}
