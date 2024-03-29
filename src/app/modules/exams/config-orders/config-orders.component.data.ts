import { FormDialog } from "src/app/core/interface/form-dialog/form-dialog";
import { ColumnDef } from "src/app/core/interface/shared/columnDef";

export const displayedColumns: string[] = ['Description','Result','Unit','Reference','action'];
export const columns: ColumnDef[] = [
    {
        column: 'Description',
        header:'Hematoanalisis',
        type: 'facture',
    },
    {
        column: 'Result',
        header:'Resultados',
        type: 'text',
    },
    {
        column: 'Unit',
        header:'Unidad',
        type: 'text',
        class:'semiWidth'
    },
    {
        column: 'Reference',
        header:'Valor de Referencia',
        type: 'text',
        class:'semiWidth'
    },
    {
        column: 'action',
        header:'Editar',
        isIcon: true,
        icon: 'edit',
        color: 'primary',
    },
];

export const dataform: FormDialog = {
    title: 'Editar prueba',
    dataForm: [
        {
            label: '',
            type: '',
            value: '',
            formControlName: 'Id'
        },
        {
            label: 'Descripción',
            type: 'input',
            value: '',
            formControlName: 'Description'
        },
        {
            label: 'Resultados',
            type: 'input',
            value: '',
            formControlName: 'Result'
        },
        {
            label: 'Unidad',
            type: 'select',
            value: '',
            options: [
                {label: 'g/dl', value: 'g/dl'},
                {label: '%', value: '%'},
                {label: 'xmm3', value: 'xmm3'},
            ],
            formControlName: 'Unit'
        },
        {
            label: 'Referencia',
            type: 'input',
            value: '',
            formControlName: 'Reference'
        },
    ]
}