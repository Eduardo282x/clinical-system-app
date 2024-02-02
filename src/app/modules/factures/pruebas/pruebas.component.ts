import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { EditService, Services } from 'src/app/core/interface/services/services';
import { ColumnDef } from 'src/app/core/interface/shared/columnDef';
import { EmitAction } from 'src/app/core/interface/tabla/emitAction';
import { ClientsService } from 'src/app/core/services/clients/clients.service';
import { ServicesService } from 'src/app/core/services/services/services.service';
import { FilterState } from 'src/app/core/state/tabla/filter.state';
import Swal from 'sweetalert2';
import { columns, displayedColumns, dataform } from './pruebas.data';
import { FormGenericComponent } from '../../shared/form-generic/form-generic.component';
import { MatDialog } from '@angular/material/dialog';
import { FormDialog } from 'src/app/core/interface/form-dialog/form-dialog';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.compoent.html',
  styleUrls: ['./pruebas.component.css'],
})
export class PruebasComponent { 

  displayedColumns: string[] = displayedColumns;
  columns: ColumnDef[] = columns;
  dataFormGeneric: FormDialog = dataform
  filter: string = '';
  dataSource: any;
  
  constructor(
    private servicesService: ServicesService,
    private location:Location,
    private dialog: MatDialog,
    private filterState: FilterState
  ){}
  ngOnInit(): void {
    this.servicesService.getServices();

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
    if(getAction.action == 'Edit'){
      this.updatePrueba(getAction.data);
    }
    if(getAction.action == 'Delete'){
      this.deletePrueba(getAction.data);
    }
  }

  updatePrueba(prueba: Services): void {
    const idService = this.dataFormGeneric.dataForm.find(formControl => formControl.formControlName == 'IdService');
    const descrip = this.dataFormGeneric.dataForm.find(formControl => formControl.formControlName == 'Description');
    const cost = this.dataFormGeneric.dataForm.find(formControl => formControl.formControlName == 'Cost');
    const avalible = this.dataFormGeneric.dataForm.find(formControl => formControl.formControlName == 'Avalible');
    if(idService && descrip && cost && avalible){
      idService.value = prueba.IdService;
      descrip.value = prueba.Description;
      cost.value = prueba.Cost;
      avalible.value = prueba.Avalible;
    }
    console.log(descrip);
    
    console.log(prueba);
    

      const diagloRef = this.dialog.open(FormGenericComponent,{
        data: this.dataFormGeneric,
        width: '30rem',
        height: '20rem'
      });
  
      diagloRef.afterClosed().subscribe(result => {
        const updateService: EditService = {
          IdService: result.IdService,
          Description: result.Description,
          Cost: result.Cost,
          Avalible: result.Avalible,
        }
        this.updateService(updateService);
      })
    
  }

  updateService(services: EditService): void {
    this.servicesService.updateServices(services);
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
