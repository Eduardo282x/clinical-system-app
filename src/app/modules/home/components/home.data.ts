import { Card } from "src/app/core/interface/card/card";

export const cardArray: Card[] = [{
    name: 'Modulo de Empleados',
    icon: 'usuario-check',
    redirect: 'home/employes',
    userRol: 1,
    colored: '#9295fe'
},
{
    name: 'Modulo de Facturación',
    icon: 'usuario-pay',
    redirect: 'home/facturacion',
    userRol: 2,
    colored: '#226cbb'
},
{
    name: 'Modulo de Exámenes',
    icon: 'investigate',
    redirect: 'home/examenes',
    userRol: 3,
    colored: '#020777'
},
{
    name: 'Carga de Resultados',
    icon: 'usuario-list',
    redirect: 'home/resultados',
    userRol: 4,
    colored: '#17a6e7'
}];