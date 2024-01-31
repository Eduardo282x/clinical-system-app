import { ColumnDef } from "src/app/core/interface/shared/columnDef";

export const displayedColumns: string[] = ['NameFull', 'Identify', 'Edit', 'Delete'];
export const columns: ColumnDef[] = [
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
        class: 'minWidth',
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