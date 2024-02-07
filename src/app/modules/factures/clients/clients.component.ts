import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clients } from 'src/app/core/interface/clients/clients';
import { ColumnDef } from 'src/app/core/interface/shared/columnDef';
import { EmitAction } from 'src/app/core/interface/tabla/emitAction';
import { ClientsService } from 'src/app/core/services/clients/clients.service';
import { EmployesService } from 'src/app/core/services/employes/employes.service';
import { FilterState } from 'src/app/core/state/tabla/filter.state';
import Swal from 'sweetalert2';
import { columns, displayedColumns } from './clients.data';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit{

  displayedColumns: string[] = displayedColumns;
  columns: ColumnDef[] = columns;
  filter: string = '';
  dataSource: any;
  
  constructor(
    private clientService: ClientsService,
    private location:Location,
    private _router: Router,
    private filterState: FilterState
  ){}
  ngOnInit(): void {
    this.clientService.getClient();

    this.clientService.getData$()
    .subscribe({
      next: (users: Clients[] | any) => {
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

  getActionTable(getAction: EmitAction): void {
    if(getAction.action == 'Delete'){
      this.deleteClient(getAction.data)
    }

    if(getAction.action == 'Edit'){
      const client = {IdClients: getAction.data.IdClients};
      this.clientService.getAllOneClient(client);
      this._router.navigate(['/home/factures/clients-register'])
    }
  }

  deleteClient(data: Clients): void {
    Swal.fire({
      title: "Estas seguro que deseas eliminar el cliente?",
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const client = {Id: data.IdClients}
        this.clientService.deleteClient(client);
      }
    })
  }

  goBack(): void {
    this.location.back();
  }
}
