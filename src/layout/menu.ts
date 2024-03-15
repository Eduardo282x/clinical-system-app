import { Menu } from "../interfaces/menu.interface";

export const menu: Menu[] = [
    {
        redirectTo: '/home',
        title: 'Inicio',
        icon: 'home'
    },
    {
        redirectTo: '/orders',
        title: 'Ordenes',
        icon: 'orders'
    },
    {
        redirectTo: '/factures',
        title: 'Facturas',
        icon: 'facture'
    },
    {
        redirectTo: '/services',
        title: 'Servicios',
        icon: 'services'
    },
]