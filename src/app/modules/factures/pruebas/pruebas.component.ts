import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Services } from 'src/app/core/interface/services/services';
import { ColumnDef } from 'src/app/core/interface/shared/columnDef';
import { EmitAction } from 'src/app/core/interface/tabla/emitAction';
import { ClientsService } from 'src/app/core/services/clients/clients.service';
import { ServicesService } from 'src/app/core/services/services/services.service';
import { FilterState } from 'src/app/core/state/tabla/filter.state';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.compoent.html',
  styleUrls: ['./pruebas.component.css'],
})
export class PruebasComponent { 

  displayedColumns: string[] = ['CodService','Description','Cost','Avalible','Edit','Delete'];
  columns: ColumnDef[] = [
    // {
    //   column: 'Id',
    //   header: 'IdClients',
    //   type: 'text',
    // },
    {
      column: 'CodService',
      header: 'COD',
      type: 'text',
      class: '',
    },
    {
      column: 'Description',
      header: 'Description',
      type: 'text',
      class: 'maxWidth',
    },
    {
      column: 'Cost',
      header: 'Precio',
      type: 'price',
      class: '',
    },
    {
      column: 'Avalible',
      header: 'Disponible',
      type: 'bool',
      class: '',
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
    private servicesService: ServicesService,
    private location:Location,
    private filterState: FilterState
  ){}
  ngOnInit(): void {
    this.servicesService.getEmployes();

    this.servicesService.getData$()
    .subscribe({
      next: (services: Services[] | any) => {
        if(services){
          this.dataSource = services;
        }
      }
    })
  }

  applyFilter(event: Event) {
    this.filter = (event.target as HTMLInputElement).value;
    this.filterState.setState(this.filter);
  }

  getActionTable(getAction: EmitAction): void {
    console.log(getAction);
    if(getAction.action == 'Delete'){
      this.deletePrueba(getAction.data);
    }
  }

  deletePrueba(data: Services): void {
    Swal.fire({
      title: "Estas seguro que deseas eliminar la prueba?",
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log('Prueba eliminada', data.IdService);
        
      }
    })
  }

  goBack(): void {
    this.location.back();
  }
}
