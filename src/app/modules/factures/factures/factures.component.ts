import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ResponseClient } from 'src/app/core/interface/BaseResponse';
import { ClientsService } from 'src/app/core/services/clients/clients.service';
import { ClientDialogComponent } from '../ClientDialog/ClientDialog.component';


@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css'],
})
export class FacturesComponent implements OnInit {

  formClient: FormGroup = new FormGroup({
    clientIdentify: new FormControl('',[Validators.required])
  })

  constructor(
    private clientService: ClientsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
      this.clientService.getData$().subscribe({
        next: (response: ResponseClient | any) => {
          if(response.success){
            localStorage.setItem('client', JSON.stringify(response.client))
          }
          else {
            this.dialog.open(ClientDialogComponent,{
              data: response,
              width: '40rem',
              height: '15rem'
            })

            setTimeout(() => {
              this.dialog.closeAll();
            }, 1500);
          }
        }
      })
  }

  onSubmitClient(): void {
    console.log(this.formClient.value);
    this.clientService.getOneClient(this.formClient.value);
  }

}
