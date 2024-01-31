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
  
  constructor(
    private location: Location,
    private _router: Router,
    private filterState: FilterState,
    private factureService: FactureService
  ){

  }

  ngOnInit(): void {
    this.factureService.getFactures();

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
    console.log(getAction);
    if(getAction.action == 'Delete'){
      this.deleteClient(getAction.data)
    }

    if(getAction.action == 'Edit'){
      this._router.navigate(['/home/factures/clients-register'])
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
        console.log('cliente eliminada', data.IdFacture);
        // this.clientService.deleteClient(client);
      }
    })
  }

  goBack(): void {
    this.location.back();
  }
}
