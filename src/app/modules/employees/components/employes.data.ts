import { Banner } from "src/app/core/interface/banner/banner";
import { MenuOption } from "src/app/core/interface/menuOption/MenuOption";

export const bannerData: Banner = {
    existName: true,
    nameModule: 'Módulo de Empleados'
}

export const menuOption: MenuOption[] = [
    {
        icon: 'asistencia',
        label: 'Aplicación de Asistencias'
    },
    {
        icon: 'impresora',
        label: 'Ver o Imprimir Asistencias'
    },
    {
        icon: 'empleados',
        label: 'Gestión de Empleados'
    },
]