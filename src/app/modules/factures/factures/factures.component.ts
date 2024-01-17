import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResponseClient } from 'src/app/core/interface/BaseResponse';
import { ClientsService } from 'src/app/core/services/clients/clients.service';

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css'],
})
export class FacturesComponent implements OnInit {

  formClient: FormGroup = new FormGroup({
    clientIdentify: new FormControl('28391325',[Validators.required])
  })

  constructor(
    private clientService: ClientsService
  ) {}

  ngOnInit(): void {
      this.clientService.getData$().subscribe({
        next: (response: ResponseClient | any) => {
          console.log(response);
          if(response.success){
            localStorage.setItem('client', JSON.stringify(response.client))
          }
        }
      })
  }

  onSubmitClient(): void {
    console.log(this.formClient.value);
    this.clientService.getOneClient(this.formClient.value);
  }

}
