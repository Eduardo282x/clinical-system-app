import { Component, OnInit } from '@angular/core';
import { registerGeneric } from 'src/app/core/interface/form-generic/formGeneric';
import { Snackbar } from 'src/app/core/interface/snackbar/snackbar';
import { ClientsService } from 'src/app/core/services/clients/clients.service';
import { SnackBarComponent } from '../../shared/snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-clients',
  templateUrl: './register-clients.component.html',
  styleUrls: ['./register-clients.component.css'],
})
export class RegisterClientsComponent implements OnInit {
  
  constructor(
    private clientService: ClientsService,
    private _snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.clientService.getData$().subscribe({
      next: (response: any) => {
        console.log(response);
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

  addClient(client: FormGroup): void {
    const dataClient = {
      NameFull: client.get('NameFull')?.value,
      Identify: client.get('Prefix')?.value + client.get('Identify')?.value,
      Birhdate: client.get('Birhdate')?.value,
      Age: client.get('Age')?.value,
      PhonePrimary: client.get('PhonePrimary')?.value,
      PhoneSecundary: client.get('PhoneSecundary')?.value,
      Email: client.get('Email')?.value,
      Address: client.get('Address')?.value,
      Sex: client.get('Sex')?.value,
    }
    this.clientService.postClientAdd(dataClient);
  }
}
