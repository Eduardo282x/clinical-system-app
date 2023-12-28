import { Component, OnInit } from '@angular/core';
import { footerData, cardArray } from './home.data';
import { PayloadService } from 'src/app/core/services/Payload.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  footerData = footerData;
  cardArray = cardArray;

  constructor(
    private payloadService: PayloadService
  ) {}

  ngOnInit(): void {
    const dataUser = this.payloadService.getDataLocalStorage();
    if(dataUser){
      const date = new Date();
      this.footerData.push(dataUser.Name.toUpperCase())
      this.footerData.push(dataUser.Rol)
      this.footerData.push(`Ultima vez: ${date.toLocaleDateString()}`)
      this.footerData.push(`${date.getFullYear()} ©Todos los derechos reservados.`)
    }
  }
}
