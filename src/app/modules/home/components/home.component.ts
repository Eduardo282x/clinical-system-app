import { Component, OnInit } from '@angular/core';
import { cardArray } from './home.data';
import { PayloadService } from 'src/app/core/services/Payload.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  footerData: string[] = [];
  cardArray = cardArray;

  constructor(
    private payloadService: PayloadService
  ) {}

  ngOnInit(): void {
    const dataUser = this.payloadService.getDataLocalStorage();
    if(dataUser){
      const date = new Date();
      this.footerData = [
        'Bienvenido de Nuevo',
        `${dataUser.Name.toUpperCase()}`,
        `${dataUser.Rol}`,
        `Ultima vez: ${date.toLocaleDateString()}`,
        `${date.getFullYear()} ©Todos los derechos reservados.` ]
    }
  }
}
