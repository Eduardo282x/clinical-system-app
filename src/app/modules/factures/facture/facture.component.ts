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
import { columns, dataform, displayedColumns } from './facture.data';
import { FactureService } from 'src/app/core/services/factures/facture.service';
import { NewTempFacture, TempFacture } from 'src/app/core/interface/facture/tempFacture';
import { DataUser } from 'src/app/core/interface/BaseResponse';
import { EmitAction } from 'src/app/core/interface/tabla/emitAction';
import { MatDialog } from '@angular/material/dialog';
import { FormGenericComponent } from '../../shared/form-generic/form-generic.component';
import { FormDialog } from 'src/app/core/interface/form-generic/form-genereic';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css'],
})
export class FactureComponent extends BaseComponent implements OnInit, AfterViewInit{ 

  client: Clients | any;
  user: DataUser | any;
  order: string ='000002';

  displayedColumns: string[] = displayedColumns;
  dataFormGeneric: FormDialog = dataform;
  columns: ColumnDef[] = columns;
  dataSource: TempFacture[] = [];
  existData: boolean = false;

  myControl = new FormControl('');
  options: Services[] = [];
  filteredOptions: Observable<Services[]> | any;

  constructor(
    private payloadService: PayloadService,
    private servicesService: ServicesService,
    private factureService: FactureService,
    private dialog: MatDialog
  ) {
    super()
  }

  ngOnInit(): void {
      this.servicesService.getServicesAvalibles();
      this.client = this.payloadService.getClietnDataLocalStorage();
      this.user = this.payloadService.getDataLocalStorage();
      this.factureService.getTempFacture(this.user.Id);

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

      console.log(this.client);

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

  getActionTable(dateGet: EmitAction): void {
    console.log(dateGet);
    if(dateGet.action == 'Delete'){
      this.deleteTemp(dateGet.data);
    }
    if(dateGet.action == 'Edit'){
      this.openEditTemp(dateGet.data);
    }
  }

  deleteTemp(temp: any): void {
    const row: NewTempFacture = {
      IdUser: this.user.Id,
      IdServices: temp.IdServices,
      Amount: 0
    };
    
    this.factureService.deleteTempFacture(row)
    console.log(temp);
  }

  openEditTemp(temp: any): void{
    this.dataFormGeneric.dataForm[0].value = temp.Amount;
    this.dataFormGeneric.dataForm[1].value = temp.IdServices;

    const diagloRef = this.dialog.open(FormGenericComponent,{
      data: this.dataFormGeneric,
      width: '30rem',
      height: '20rem'
    });

    diagloRef.afterClosed().subscribe(result => {
      console.log('Result form: ',result);
      const updateTempFacture: NewTempFacture = {
        Amount: result.Amount,
        IdServices: result.IdServices,
        IdUser: this.user.Id,
      }
      this.editTemp(updateTempFacture)
    })
  }

  editTemp(updateFacture: NewTempFacture): void {
    this.factureService.updateTempFacture(updateFacture);
    this.factureService.getTempFacture(this.user.Id);
  }

  addServices(service: Services): void {
    const newService: NewTempFacture= {
      IdUser: this.user.Id,
      IdServices: service.IdService,
      Amount: 1
    }
    this.factureService.postAddTempFacture(newService)
    console.log(service);
  }
}
