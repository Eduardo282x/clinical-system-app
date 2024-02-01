import { FormDialog } from "src/app/core/interface/form-dialog/form-dialog";
import { ColumnDef } from "src/app/core/interface/shared/columnDef";

export const displayedColumns: string[] = ['CodService', 'Description', 'Cost', 'Avalible', 'Edit'];
export const columns: ColumnDef[] = [
    // {
    //   column: 'Id',
    //   header: 'IdClients',
    //   type: 'text',
    // },
    {
        column: 'CodService',
        header: 'COD',
        type: 'text',
        class: '',
    },
    {
        column: 'Description',
        header: 'Descripción',
        type: 'text',
        class: 'maxWidth',
    },
    {
        column: 'Cost',
        header: 'Precio',
        type: 'price',
        class: '',
    },
    {
        column: 'Avalible',
        header: 'Disponible',
        type: 'bool',
        class: '',
    },
    {
        column: 'Edit',
        header: 'Editar',
        icon: 'edit',
        color: 'primary',
        isIcon: true,
    },
    // {
    //     column: 'Delete',
    //     header: 'Borrar',
    //     icon: 'delete',
    //     color: 'warn',
    //     isIcon: true,
    // }
];

export const dataform: FormDialog = {
    title: 'Editar prueba',
    dataForm: [
        {
            label: '',
            type: '',
            value: '',
            formControlName: 'IdService'
        },
        {
            label: 'Descripción',
            type: 'input',
            value: '',
            formControlName: 'Description'
        },
        {
            label: 'Precio',
            type: 'input',
            value: '',
            formControlName: 'Cost'
        },
        {
            label: 'Disponible',
            type: 'side',
            value: '',
            formControlName: 'Avalible'
        },
    ]
}