import { ClientDialogComponent } from 'src/app/modules/factures/ClientDialog/clientDialog.component';
import { ClientsService } from 'src/app/core/services/clients/clients.service';
import { ResponseClient } from 'src/app/core/interface/BaseResponse';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css'],
})
export class FacturesComponent extends BaseComponent implements OnInit, OnDestroy {

  @Input() facture: boolean = true;

  formClient: FormGroup = new FormGroup({
    clientIdentify: new FormControl('',[Validators.required]),
    clientPrefix: new FormControl('',[Validators.required])
  })

  constructor(
    private clientService: ClientsService,
    private dialog: MatDialog,
    private _router: Router,
    private location: Location
  ) {
    super()
  }

  ngOnInit(): void {
      this.clientService.getData$()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (response: ResponseClient ) => {
          if(response){
            if(response.success){
              const client = response.client;
              client.facture = this.facture;
              client.onlyShow = client.facture ? 'Facturar' :  'Enviar';
              localStorage.setItem('client', JSON.stringify(client));
              setTimeout(() => {
                this._router.navigate(['home/factures/facture'])
              }, 1000);
            }
  
            this.dialog.open(ClientDialogComponent,{
              data: response,
              width: '40rem',
              height: '15rem'
            })
  
            setTimeout(() => {
              this.dialog.closeAll();
            }, 1000);
          }
        }
      })
  }

  goBack(): void {
    this.location.back();
  }

  redirectClient(): void {
    this._router.navigate(['home/factures/clients-register'])
  }

  onSubmitClient(): void {
    const identify = {
      clientIdentify: `${this.formClient.get('clientPrefix')?.value}${this.formClient.get('clientIdentify')?.value}`
    };
    this.clientService.getOneClient(identify);
  }

  ngOnDestroy(): void {
    this.clientService.clearData();
  }
}
