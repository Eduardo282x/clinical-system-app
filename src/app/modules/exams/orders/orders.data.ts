import { ColumnDef } from "src/app/core/interface/shared/columnDef";

export const displayedColumns: string[] = ['IdFacture','Identify','NameFull','action'];
export const columns: ColumnDef[] = [
    {
        column: 'IdFacture',
        header:'Orden',
        type: 'facture',
    },
    {
        column: 'Identify',
        header:'Cedula',
        type: 'text',
    },
    {
        column: 'NameFull',
        header:'Nombre completo',
        type: 'text',
        class:'semiWidth'
    },
    {
        column: 'action',
        header:'Ver y realizar',
        isIcon: true,
        icon: 'edit',
        color: 'primary',
    },
];