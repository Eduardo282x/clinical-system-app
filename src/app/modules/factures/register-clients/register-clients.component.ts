import { Component, OnInit } from '@angular/core';
import { Snackbar } from 'src/app/core/interface/snackbar/snackbar';
import { ClientsService } from 'src/app/core/services/clients/clients.service';
import { SnackBarComponent } from '../../shared/snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Clients, ClientsCompleted } from 'src/app/core/interface/clients/clients';
import { BaseResponse } from 'src/app/core/interface/BaseResponse';
import { EmitFormOne } from 'src/app/core/interface/form-generic/formGeneric';
import { BaseComponent } from '../../base/base.component';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-register-clients',
  templateUrl: './register-clients.component.html',
  styleUrls: ['./register-clients.component.css'],
})
export class RegisterClientsComponent  extends BaseComponent implements OnInit {
  
  constructor(
    private clientService: ClientsService,
    private location: Location,
    private _snackBar: MatSnackBar
  ){
    super();
  }

  ngOnInit(): void {
    this.clientService.getResponse$()
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe({
      next: (response: BaseResponse) => {
        if(response){
          const dataSnackbar: Snackbar = {
            message: response.message,
            success: response.success
          }
      
          this._snackBar.openFromComponent(SnackBarComponent,{
            duration: 2000,
            data: dataSnackbar
          });
        }
      }
    })
  }

  goBack(): void {
    this.location.back();
  }

  getDataChild(client: EmitFormOne): void {
    const dataClient: ClientsCompleted = {
      NameFull: client.form.get('NameFull')?.value,
      Identify: client.form.get('Prefix')?.value + client.form.get('Identify')?.value,
      Birhdate: client.form.get('Birhdate')?.value,
      Age: client.form.get('Age')?.value,
      PhonePrimary: client.form.get('PhonePrimary')?.value,
      PhoneSecundary: client.form.get('PhoneSecundary')?.value,
      Email: client.form.get('Email')?.value,
      Address: client.form.get('Address')?.value,
      Sex: client.form.get('Sex')?.value,
      IdClients: client.form.get('Id')?.value
    }
    this.clientService.postClient(dataClient);
  }
}
