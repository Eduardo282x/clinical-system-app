import { Component, OnInit } from '@angular/core';
import { registerGeneric } from 'src/app/core/interface/form/formGeneric';
import { Snackbar } from 'src/app/core/interface/snackbar/snackbar';
import { ClientsService } from 'src/app/core/services/clients/clients.service';
import { SnackBarComponent } from '../../shared/snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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
        const dataSnackbar: Snackbar = {
          message: response.message,
          success: response.success
        }
    
        this._snackBar.openFromComponent(SnackBarComponent,{
          duration: 2000,
          data: dataSnackbar
        });
      }
    })
  }

  addClient(client: registerGeneric): void {
    this.clientService.postClientAdd(client);
  }
}
