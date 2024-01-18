import { ClientDialogComponent } from 'src/app/modules/factures/ClientDialog/clientDialog.component';
import { ClientsService } from 'src/app/core/services/clients/clients.service';
import { ResponseClient } from 'src/app/core/interface/BaseResponse';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css'],
})
export class FacturesComponent extends BaseComponent implements OnInit, OnDestroy {

  formClient: FormGroup = new FormGroup({
    clientIdentify: new FormControl('',[Validators.required])
  })

  constructor(
    private clientService: ClientsService,
    private dialog: MatDialog,
    private _router: Router
  ) {
    super()
  }

  ngOnInit(): void {
      this.clientService.getData$()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (response: ResponseClient | any) => {
          if(response.success){
            localStorage.setItem('client', JSON.stringify(response.client));
            setTimeout(() => {
              this._router.navigate(['home/factures/facture'])
            }, 1500);
          }

          this.dialog.open(ClientDialogComponent,{
            data: response,
            width: '40rem',
            height: '15rem'
          })

          setTimeout(() => {
            this.dialog.closeAll();
          }, 1500);
        }
      })
  }

  redirectClient(): void {
    this._router.navigate(['home/factures/clients-register'])
  }

  onSubmitClient(): void {
    this.clientService.getOneClient(this.formClient.value);
  }

  ngOnDestroy(): void {
    this.clientService.clearData();
  }
}
