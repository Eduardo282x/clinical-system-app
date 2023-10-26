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
    icon: 'usuario-check',
    redirect: 'empleados'
  },
  {
    name: 'Modulo de Facturación',
    icon: 'usuario-pay',
    redirect: 'facturacion'
  },
  {
    name: 'Modulo de Exámenes',
    icon: 'investigate',
    redirect: 'examenes'
  },
  {
    name: 'Carga de Resultados',
    icon: 'usuario-list',
    redirect: 'resultados'
  }];

  footerData: string[] = [
    'Bienvenido de Nuevo',
  ]

  constructor() {}

  ngOnInit(): void {
    const dataUser = JSON.parse(localStorage.getItem('userData') ?? '{}');
    const date = new Date();
    this.footerData.push(dataUser.name)
    this.footerData.push(dataUser.rol)
    this.footerData.push(`Ultima vez: ${date.toLocaleDateString()}`)
    this.footerData.push(`${date.getFullYear()} ©Todos los derechos reservados.`)
  }

  redirect(location: string): void{
    console.log(location);
  }

}
