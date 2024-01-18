import { ColumnDef } from "src/app/core/interface/shared/columnDef";

export const displayedColumns: string[] = ['CodService','Description','Amount','Cost','Total','Edit',
'Delete'];

export const columns: ColumnDef[] = [
    {
        header: 'Cod',
        column: 'CodService',
        type: 'text'
    },
    {
        header: 'Descripción',
        column: 'Description',
        type: 'text',
        class: 'maxWidth'
    },
    {
        header: 'Cantidad',
        column: 'Amount',
        type: 'text'
    },
    {
        header: 'Precio',
        column: 'Cost',
        type: 'text'
    },
    {
        header: 'Total',
        column: 'Total',
        type: 'text'
    },
    {
        column: 'Edit',
        header: 'Editar',
        icon: 'edit',
        color: 'primary',
        isIcon: true,
    },
    {
        column: 'Delete',
        header: 'Borrar',
        icon: 'delete',
        color: 'warn',
        isIcon: true,
    }
];