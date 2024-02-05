import { Menu } from "src/app/core/interface/menuOption/MenuOption";

export const menu: Menu[] = [
    {
        title: 'Modulo Empleados',
        icon: 'usuario-check',
        deploy: false,
        permisses: ['Dueño'],
        children: [
            {
                title: 'Asistencia',
                icon: 'empleados',
                redirect: '/home/employes/asistent',
                permisses: ['Dueño','Administrador','Bioanalista'],
            },
            {
                title: 'Imprimir',
                icon: 'impresora',
                redirect: '/home/employes/seeAsistent',
                permisses: ['Dueño','Administrador','Bioanalista'],
            },
            {
                title: 'Gestión',
                icon: 'asistencia',
                redirect: '/home/employes/employe',
                permisses: ['Dueño','Administrador','Bioanalista'],
            },
        ]
    },
    {
        title: 'Modulo Facturación',
        icon: 'usuario-pay',
        deploy: false,
        permisses: ['Dueño','Administrador'],
        children: [
            {
                title: 'Facturas',
                icon: 'facturas',
                redirect: '/home/factures/choose-facture',
                permisses: ['Dueño','Administrador','Bioanalista'],
            },
            {
                title: 'Presupuesto',
                icon: 'presupuesto',
                redirect: '/home/factures/budget',
                permisses: ['Dueño','Administrador','Bioanalista'],
            },
            {
                title: 'Configuración',
                icon: 'configuracion',
                redirect: '/home/factures/choose-configuration',
                permisses: ['Dueño','Administrador','Bioanalista'],
            },
        ]
    },
    {
        title: 'Modulo Exámenes',
        icon: 'investigate',
        deploy: false,
        permisses: ['Dueño','Bioanalista'],
        children: [
            {
                title: 'Ordenes pendientes',
                icon: 'facturas',
                redirect: '/home/examenes/orders',
                permisses: ['Dueño','Bioanalista'],
            },
            {
                title: 'Configuración',
                icon: 'configuracion',
                redirect: '/home/examenes/config',
                permisses: ['Dueño','Bioanalista'],
            },
        ]
    },
    // {
    //     title: 'Carga de Resultados',
    //     icon: 'usuario-list',
    //     deploy: false
    // },
]