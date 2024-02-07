import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clients } from 'src/app/core/interface/clients/clients';
import { ColumnDef } from 'src/app/core/interface/shared/columnDef';
import { EmitAction } from 'src/app/core/interface/tabla/emitAction';
import { FactureService } from 'src/app/core/services/factures/facture.service';
import { FilterState } from 'src/app/core/state/tabla/filter.state';
import Swal from 'sweetalert2';
import { columns, displayedColumns } from './anulation.data';
import { Factures } from 'src/app/core/interface/facture/facture';
import { PayloadService } from 'src/app/core/services/Payload.service';
import { DataUser } from 'src/app/core/interface/BaseResponse';

@Component({
  selector: 'app-anulation',
  templateUrl: './anulationcomponent.html',
  styleUrls: ['./anulation.component.css'],
})
export class AnulationComponent implements OnInit{

  displayedColumns: string[] = displayedColumns;
  columns: ColumnDef[] = columns;
  filter: string = '';
  dataSource: any;
  client!: Clients;
  user!: DataUser;
  
  constructor(
    private location: Location,
    private _router: Router,
    private filterState: FilterState,
    private factureService: FactureService,
    private payloadServce: PayloadService
  ){

  }

  ngOnInit(): void {
    this.factureService.getFactures();
    this.client = this.payloadServce.getClietnDataLocalStorage();
    this.user = this.payloadServce.getDataLocalStorage();

    this.factureService.getFactureData$()
    .subscribe({
      next: (factures: Factures[] | any) => {
        if(factures){
          this.dataSource = factures;
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

    if(getAction.action == 'Show'){
      const setClient: Clients = {
        IdClients: getAction.data.IdClients,
        IdFacture: getAction.data.IdFacture,
        FullName: getAction.data.NameFull,
        Identify:  getAction.data.Identify,
        facture: true,
        onlyShow: 'Anular'
      };
      localStorage.setItem('client', JSON.stringify(setClient));
      this._router.navigate(['/home/factures/facture'])
    }
  }

  deleteClient(data: Factures): void {   
    Swal.fire({
      title: "Estas seguro que deseas anular la factura?",
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const facture = {IdFacture: data.IdFacture} 
        const getFacture = {
          IdUser: this.user.Id,
          IdClient: this.client.IdClients,
        }
        this.factureService.deleteFacture(facture, getFacture);
      }
    })
  }

  goBack(): void {
    this.location.back();
  }
}
