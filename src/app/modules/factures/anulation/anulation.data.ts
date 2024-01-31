import { ColumnDef } from "src/app/core/interface/shared/columnDef";

export const displayedColumns: string[] = ['IdFacture', 'NameFull', 'Identify', 'DateFacture', 'Show', 'Delete'];
export const columns: ColumnDef[] = [
    {
        column: 'IdFacture',
        header: 'Orden',
        type: 'facture',
    },
    {
        column: 'NameFull',
        header: 'Nombre completo',
        type: 'text',
        class: 'maxWidth',
    },
    {
        column: 'Identify',
        header: 'Cedula',
        type: 'text',
    },
    {
        column: 'DateFacture',
        header: 'Fecha',
        type: 'date',
    },
    {
        column: 'Show',
        header: 'Ver',
        icon: 'visibility',
        color: 'primary',
        isIcon: true,
    },
    {
        column: 'Delete',
        header: 'Anular',
        icon: 'delete',
        color: 'warn',
        isIcon: true,
    }
];