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