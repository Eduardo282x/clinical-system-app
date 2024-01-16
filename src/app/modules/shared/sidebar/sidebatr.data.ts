import { Menu } from "src/app/core/interface/menuOption/MenuOption";

export const menu: Menu[] = [
    {
        title: 'Modulo de Empleados',
        icon: 'usuario-check',
        deploy: false,
        children: [
            {
                title: 'Asistencia',
                icon: 'empleados',
                redirect: '/home/employes/asistent'
            },
            {
                title: 'Imprimir',
                icon: 'impresora',
                redirect: '/home/employes/seeAsistent'
            },
            {
                title: 'Gestión',
                icon: 'asistencia',
                redirect: '/home/employes/employe'
            },
        ]
    },
    {
        title: 'Modulo de Facturación',
        icon: 'usuario-pay',
        deploy: false,
        children: [
            {
                title: 'Facturas',
                icon: 'facturas',
                redirect: '/home/factures/choose-facture'
            },
            {
                title: 'Presupuesto',
                icon: 'presupuesto',
                redirect: '/home/factures/budget'
            },
            {
                title: 'Configuración',
                icon: 'configuracion',
                redirect: '/home/factures/choose-configuration'
            },
        ]
    },
    {
        title: 'Modulo de Exámenes',
        icon: 'investigate',
        deploy: false
    },
    {
        title: 'Carga de Resultados',
        icon: 'usuario-list',
        deploy: false
    },
]