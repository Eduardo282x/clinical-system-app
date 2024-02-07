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

export const displayedColumnsWihtoutEdit: string[] = ['Cod','Description'];
export const columnsWihtoutEdit: ColumnDef[] = [
    {
        column: 'Cod',
        header:'Cod',
        type: 'text',
    },
    {
        column: 'Description',
        header:'Descripción',
        type: 'facture',
    },
];

export const displayedColumnsPreviewt: string[] = ['Cod','Result'];
export const columnsPreview: ColumnDef[] = [
    {
        column: 'Cod',
        header:'Examenes',
        type: 'text',
    },
    {
        column: 'Result',
        header:'Resultado',
        type: 'text',
    },
];
export const dataPreview: any[] = [
    {Cod: '001', Description: 'Hematologia Completa'},
    {Cod: '002', Description: 'Orina Completa'},
    {Cod: '003', Description: 'Heces Directa'},
]
export const dataPreviewBio: any[] = [
    {Cod: '004', Description: 'Colesterol'},
    {Cod: '005', Description: 'Cretinina en sangre'},
    {Cod: '006', Description: 'Clicemia en ayunas'},
    {Cod: '007', Description: 'HDL Colesterol'},
    {Cod: '008', Description: 'Calcio'},
    {Cod: '009', Description: 'Acido úrico en sangre'},
    {Cod: '010', Description: 'Beta H.C.G Cuantitativa'},
    {Cod: '011', Description: 'Insulina basal'},
    {Cod: '012', Description: 'Potasio'},
    {Cod: '013', Description: 'Prolactina'},
    {Cod: '014', Description: 'T.S.H'},
    {Cod: '015', Description: 'T3 Libre'},
    {Cod: '016', Description: 'T4 Libre'},
    {Cod: '017', Description: 'Trigliceridos'},
    {Cod: '018', Description: 'Úrea'},
]

export const displayedColumnsUronanalisis: string[] = ['Cod','Result','action'];
export const columnsUronanalisis: ColumnDef[] = [
    {
        column: 'Cod',
        header:'Examenes',
        type: 'text',
    },
    {
        column: 'Result',
        header:'Resultado',
        type: 'text',
    },
    {
        column: 'action',
        header:'Editar',
        isIcon: true,
        icon: 'edit',
        color: 'primary',
    },
];
export const dataUronanalisis: any[] = [
    {Id: 1, Cod: 'Color', Result: ''},
    {Id: 2, Cod: 'Olor', Result: ''},
    {Id: 3, Cod: 'Aspecto', Result: ''},
    {Id: 4, Cod: 'pH', Result: ''},
    {Id: 5, Cod: 'Densidad', Result: ''},
    {Id: 6, Cod: 'Hemoglobina', Result: ''},
    {Id: 7, Cod: 'Glucosa', Result: ''},
    {Id: 8, Cod: 'Proteinas', Result: ''},
    {Id: 9, Cod: 'Leucoditos', Result: ''},
    {Id: 10, Cod: 'Cetonas', Result: ''},
    {Id: 11, Cod: 'Urobilinogeno', Result: ''},
    {Id: 12, Cod: 'Bilirrubina', Result: ''},
    {Id: 13, Cod: 'Pigmentos Biliares', Result: ''},
    {Id: 14, Cod: 'Celulas Epiteliales', Result: ''},
    {Id: 15, Cod: 'Leucocitos', Result: ''},
    {Id: 16, Cod: 'Hematies', Result: ''},
    {Id: 17, Cod: 'Bacterias', Result: ''},
]
export const dataHeces: any[] = [
    {Id: 18, Cod: 'Color', Result: ''},
    {Id: 19, Cod: 'Reacción', Result: ''},
    {Id: 20, Cod: 'Aspecto', Result: ''},
    {Id: 21, Cod: 'Consistencia', Result: ''},
]

export const dataExamns: any[] = [
    {Id: 37,Cod: 'Hemoglobina', Result: ''},
    {Id: 38,Cod: 'Hematocrito', Result: ''},
    {Id: 39,Cod: 'Glóbulos Blancos', Result: ''},
    {Id: 40,Cod: 'Segmentos', Result: ''},
    {Id: 41,Cod: 'Linfocitos', Result: ''},
    {Id: 42,Cod: 'Eosinofilos', Result: ''},
    {Id: 43,Cod: 'Total de Celularidad', Result: ''},
    {Id: 44,Cod: 'Plaquetas', Result: ''},

]
export const dataBio: any[] = [
    {Id: 36,Cod: 'Glicemia', Result: ''},
    {Id: 22,Cod: 'Urea', Result: ''},
    {Id: 23,Cod: 'Creatinina', Result: ''},
    {Id: 24,Cod: 'Beta H.C.G Cuantitativa', Result: ''},
    {Id: 25,Cod: 'Ácido Urico', Result: ''},
    {Id: 26,Cod: 'Colesterol', Result: ''},
    {Id: 27,Cod: 'Trigliceridos', Result: ''},
    {Id: 28,Cod: 'HDL Colesterol', Result: ''},
    {Id: 29,Cod: 'Calcio', Result: ''},
    {Id: 30,Cod: 'Potasio', Result: ''},
    {Id: 31,Cod: 'Insulina Basal', Result: ''},
    {Id: 32,Cod: 'T.S.H', Result: ''},
    {Id: 33,Cod: 'T3 Libre', Result: ''},
    {Id: 34,Cod: 'T4 Libre', Result: ''},
    {Id: 35,Cod: 'Prolactina', Result: ''},
]

export const dataform: FormDialog = {
    title: 'Editar examen',
    dataForm: [
        {
            label: '',
            type: '',
            value: '',
            formControlName: 'Id'
        },
        {
            label: 'Resultados',
            type: 'input',
            value: '',
            formControlName: 'Result'
        },
    ]
}