import { Card } from "src/app/core/interface/card/card";

export const cardArray: Card[] = [{
    name: 'Modulo de Empleados',
    icon: 'usuario-check',
    redirect: 'employes'
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

export let footerData: string[] = [
    'Bienvenido de Nuevo',
]