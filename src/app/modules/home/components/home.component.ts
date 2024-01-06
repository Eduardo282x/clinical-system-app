import { Component, OnInit } from '@angular/core';
import { cardArray } from './home.data';
import { PayloadService } from 'src/app/core/services/Payload.service';
import { FooterDataState } from 'src/app/core/state/footerData/footerData.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  footerData: string[] = [];
  cardArray = cardArray;

  constructor(
    private payloadService: PayloadService,
    private footerDataState: FooterDataState,
  ) {}

  ngOnInit(): void {
    const dataUser = this.payloadService.getDataLocalStorage();

    this.cardArray = dataUser.Id_Rol == 1 ? this.cardArray : this.cardArray.filter(rol => rol.userRol == dataUser.Id_Rol);
    
    if(dataUser){
      const date = new Date();
      this.footerData = [
        'Bienvenido de Nuevo',
        `${dataUser.NameFull.toUpperCase()}`,
        `${dataUser.Rol}`,
        `Ultima vez: ${date.toLocaleDateString()}`,
        `${date.getFullYear()} ©Todos los derechos reservados.` ]

      this.footerDataState.setState(this.footerData);
    }
  }
}
