import { Component, OnInit } from '@angular/core';
import { PayloadService } from 'src/app/core/services/Payload.service';
import { FooterDataState } from 'src/app/core/state/footerData/footerData.state';
import { footerData } from '../dataShared';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerData: string[] = [];

  constructor(
    private footerDataState: FooterDataState,
    private payloadService: PayloadService,
  ){

  }

  ngOnInit(): void {
    const dataUser = this.payloadService.getDataLocalStorage();

    this.footerDataState.getState$().subscribe({
      next: (footerData: any) => {
        this.footerData = footerData;
      }
    })

    if(dataUser){
      const date = new Date();
      this.footerData = [
        'Bienvenido de Nuevo',
        `${dataUser.NameFull.toUpperCase()}`,
        `${dataUser.Rol}`,
        `Ultima vez: ${date.toLocaleDateString()}`,
        `${date.getFullYear()} ©Todos los derechos reservados.` ]
    }
  }
}
