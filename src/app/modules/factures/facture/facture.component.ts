import { CommonModule, Location } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, startWith, takeUntil } from 'rxjs';
import { Clients } from 'src/app/core/interface/clients/clients';
import { PayloadService } from 'src/app/core/services/Payload.service';
import { ServicesService } from 'src/app/core/services/services/services.service';
import { BaseComponent } from '../../base/base.component';
import { Services } from 'src/app/core/interface/services/services';
import { ColumnDef } from 'src/app/core/interface/shared/columnDef';
import { columns, columnsPres, dataform, displayedColumns, displayedColumnsPres } from './facture.data';
import { FactureService } from 'src/app/core/services/factures/facture.service';
import { GetFactures, NewTempFacture, TempFacture, TotalTransfer } from 'src/app/core/interface/facture/tempFacture';
import { DataUser } from 'src/app/core/interface/BaseResponse';
import { EmitAction } from 'src/app/core/interface/tabla/emitAction';
import { MatDialog } from '@angular/material/dialog';
import { FormGenericComponent } from '../../shared/form-generic/form-generic.component';
import { FormDialog } from 'src/app/core/interface/form-dialog/form-dialog';
import { MatStepper } from '@angular/material/stepper';
import { Banks, Payments } from 'src/app/core/interface/facture/bank';
import { BodyFacture } from 'src/app/core/interface/facture/facture';
import { Router } from '@angular/router';
import { TablaComponent } from '../../shared/Tabla/Tabla.component';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css'],
})
export class FactureComponent extends BaseComponent implements OnInit, AfterViewInit{ 

  @ViewChild(TablaComponent) tablaData!: TablaComponent;
  client: Clients | any;
  user: DataUser | any;
  showPayMethod: boolean = true;
  order: string ='000002';

  banks: Banks[] = [];
  paymenys: Payments[] = [];
  dataPresupuesto: any;

  dataTransferForm: FormGroup = new FormGroup({
    Phone:    new FormControl('',Validators.required),
    Ref:      new FormControl('',Validators.required),
    Bank:     new FormControl('',Validators.required),
    Identity: new FormControl('',Validators.required),
    PayMent:  new FormControl('',Validators.required),
    Total:    new FormControl('',Validators.required),
  })

  totalTransfer: TotalTransfer = {
    Total: 0,
    Subtotal: 0,
    Iva: 0
  }


  displayedColumns: string[] = displayedColumns;
  displayedColumnsPres: string[] = displayedColumnsPres;
  dataFormGeneric: FormDialog = dataform;
  columns: ColumnDef[] = columns;
  columnsPres: ColumnDef[] = columnsPres;
  dataSource: TempFacture[] = [];
  existData: boolean = false;
  onlyShow: string = '';

  myControl = new FormControl('');
  options: Services[] = [];
  filteredOptions: Observable<Services[]> | any;

  constructor(
    private payloadService: PayloadService,
    private servicesService: ServicesService,
    private factureService: FactureService,
    private dialog: MatDialog,
    private location: Location,
    private _router: Router
  ) {
    super()
  }

  ngOnInit(): void {
      this.servicesService.getServicesAvalibles();
      this.factureService.getBanks();
      this.factureService.getPayments();
      this.client = this.payloadService.getClietnDataLocalStorage();
      this.user = this.payloadService.getDataLocalStorage();
      this.onlyShow = this.client.onlyShow;
      this.factureService.getTempFacture(this.user.Id, this.client.IdClients, this.onlyShow ? this.client.IdFacture : null);
      
      this.showPayMethod = this.client.facture;

      if(this.onlyShow == 'Anular'){
        this.displayedColumns = this.displayedColumns.filter(item => item != 'Edit' && item != 'Delete')
        this.columns = this.columns.filter(item => item.column != 'Edit' && item.column != 'Delete')
      }

      this.factureService.getData$()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (tempfacture: GetFactures) => {
          if(tempfacture){
            this.order = String(tempfacture.IdFacture).padStart(7,'0');
            this.dataSource = tempfacture.tempFactures;
            this.existData = true;
            this.totalTransfer.Subtotal = 0;
            tempfacture.tempFactures.map(total => {
              this.totalTransfer.Subtotal += total.Total
            });
            this.totalTransfer.Iva = Number((this.totalTransfer.Subtotal * 0.16).toFixed(2));
            this.totalTransfer.Total = Number((this.totalTransfer.Subtotal + this.totalTransfer.Iva).toFixed(2));
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
      });

      this.factureService.getBanksData$()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (banks: Banks[])=>{
          if(banks){
            this.banks = banks
          }
        }
      });

      this.factureService.getPaymentsData$()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (payments: Payments[])=>{
          if(payments){
            this.paymenys = payments;
          }
        }
      })
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
    if(dateGet.action == 'Delete'){
      this.deleteTemp(dateGet.data);
    }
    if(dateGet.action == 'Edit'){
      this.openEditTemp(dateGet.data);
    }
  }

  goBack(): void {
    this.location.back();
  }

  deleteTemp(temp: any): void {
    const row: NewTempFacture = {
      IdUser: this.user.Id,
      IdClient: this.client.IdClients,
      IdServices: temp.IdServices,
      Amount: 0
    };
    
    this.factureService.deleteTempFacture(row, this.client.IdClients)
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
      const updateTempFacture: NewTempFacture = {
        Amount: result.Amount,
        IdClient: this.client.IdClients,
        IdServices: result.IdServices,
        IdUser: this.user.Id,
      }
      this.editTemp(updateTempFacture)
    })
  }

  editTemp(updateFacture: NewTempFacture): void {
    this.factureService.updateTempFacture(updateFacture, this.client.IdClients);
    this.factureService.getTempFacture(this.user.Id, this.client.IdClients);
  }

  nextStepper(stepper: MatStepper): void {
    if(this.onlyShow == 'Enviar'){
      this.tablaData.getAllData();
    }
    stepper.next();
  }

  getTablaData(event: any): void{
    this.dataPresupuesto = event
  }

  backStepper(stepper: MatStepper): void {
    stepper.previous();
  }

  validateMax(event: Event, maxLengh: number, formcontrol: string): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length > maxLengh) {
      input.value = input.value.slice(0, maxLengh);
      this.dataTransferForm.controls[formcontrol].setValue(input.value);
    }
  }

  addServices(service: Services): void {
    const newService: NewTempFacture= {
      IdUser: this.user.Id,
      IdClient: this.client.IdClients,
      IdServices: service.IdService,
      Amount: 1
    }
    this.factureService.postAddTempFacture(newService, this.client.IdClients);
    this.myControl.setValue('');
  }

  sendFacture(): void {
    const addFacture: BodyFacture = {
      IdUser: this.user.Id,
      IdClient: this.client.IdClients,
      SubTotal: this.totalTransfer.Subtotal,
      BankClient: this.dataTransferForm.get('Bank')?.value,
      Total: this.totalTransfer.Total,
      Phone: this.dataTransferForm.get('Phone')?.value,
      Identity: this.dataTransferForm.get('Identity')?.value,
      IdPayment: this.dataTransferForm.get('PayMent')?.value,
      Ref: this.dataTransferForm.get('Ref')?.value,
    };

    const presupuesto = {
      IdClient: this.client.IdClients,
      IdUser: this.user.Id,
      IdFacture: Number(this.order)
    }

    if(this.onlyShow == 'Facturar'){
      // this.factureService.postAddFacture(addFacture);
      this.factureService.getFacturaPDF(presupuesto);
      // this._router.navigate(['home/factures/choose-facture'])
    }

    if(this.onlyShow == 'Enviar'){
      this.factureService.getPresupuestoPDF(presupuesto);
      this._router.navigate(['home/factures/choose-facture'])
    }
  }
}
