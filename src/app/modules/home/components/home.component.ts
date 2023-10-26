import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/core/interface/card/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cardArray: Card[] = [{
    name:'Modulo de Empleados',
    icon: 'user'
  },
  {
    name: 'Modulo de Facturación',
    icon: 'pay'
  },
  {
    name: 'Modulo de Exámenes',
    icon: 'exam'
  },
  {
    name: 'Carga de Resultados',
    icon: ''
  }];

  footerData: string[] = [
    'Bienvenido de Nuevo',
  ]

  constructor() {}

  ngOnInit(): void {
    const dataUser = JSON.parse(localStorage.getItem('userData') ?? '{}');
    console.log(dataUser);
    const date = new Date();
    console.log(date.toLocaleDateString());
    
    this.footerData.push(dataUser.name)
    this.footerData.push(dataUser.rol)
    this.footerData.push(`Ultima vez: ${date.toLocaleDateString()}`)
    this.footerData.push(`${date.getFullYear()} ©Todos los derechos reservados.`)
    
    

  }

}
