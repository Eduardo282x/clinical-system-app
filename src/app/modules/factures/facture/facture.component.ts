import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith, takeUntil } from 'rxjs';
import { Clients } from 'src/app/core/interface/clients/clients';
import { PayloadService } from 'src/app/core/services/Payload.service';
import { ServicesService } from 'src/app/core/services/services/services.service';
import { BaseComponent } from '../../base/base.component';
import { Services } from 'src/app/core/interface/services/services';
import { ColumnDef } from 'src/app/core/interface/shared/columnDef';
import { columns, displayedColumns } from './facture.data';
import { FactureService } from 'src/app/core/services/factures/facture.service';
import { NewTempFacture, TempFacture } from 'src/app/core/interface/facture/tempFacture';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css'],
})
export class FactureComponent extends BaseComponent implements OnInit, AfterViewInit{ 

  client: Clients | any;
  order: string ='000002';

  displayedColumns: string[] = displayedColumns;
  columns: ColumnDef[] = columns;
  dataSource: TempFacture[] = [];
  existData: boolean = false;

  myControl = new FormControl('');
  options: Services[] = [];
  filteredOptions: Observable<Services[]> | any;

  constructor(
    private payloadService: PayloadService,
    private servicesService: ServicesService,
    private factureService: FactureService
  ) {
    super()
  }

  ngOnInit(): void {
      this.servicesService.getServicesAvalibles();
      this.factureService.getTempFacture(2);

      this.factureService.getData$()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (tempfacture: TempFacture[] | any) => {
          if(tempfacture){
            this.dataSource = tempfacture;
            this.existData = true;
            console.log(this.dataSource);
            
          }
        }
      })

      this.servicesService.getData$()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (services: Services[] | any)=>{
          if(services){
            this.options = services;
          }
        }
      })

      this.client = this.payloadService.getClietnDataLocalStorage();
  }

  ngAfterViewInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  _filter(value: string): Services[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.Description.toLowerCase().includes(filterValue) || option.CodService.toLowerCase().includes(filterValue));
  }

  addServices(service: Services): void {
    const newService: NewTempFacture= {
      IdUser: 2,
      IdServices: service.IdService,
      Amount: 1
    }
    this.factureService.postAddTempFacture(newService)
    console.log(service);
  }
}
