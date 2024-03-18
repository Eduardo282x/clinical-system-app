import { DataForm, FormStructure } from "../../interfaces/form.interface";
import { ServicesData } from "../../interfaces/services.interface";
import { ColumnDef, OptionsTable, TableInterface } from "../../interfaces/table.interface";
import * as yup from 'yup';

const options: OptionsTable = {
    showSeachInput: true,
    showAddBtn: true,
    showTable: true,
    showFilter: true
}

const columns: ColumnDef[] = [
    {
        header: 'Codigo',
        column: 'codService',
        type: 'string',
        filterOption: true,
        width: 100,
    },
    {
        header: 'Descripción',
        column: 'description',
        type: 'string',
        filterOption: true,
        width: 300,
    },
    {
        header: 'Precio',
        column: 'cost',
        type: 'price',
        filterOption: true,
        width: 100,
    },
    {
        header: 'Disponible',
        column: 'avalible',
        type: 'boolean',
        filterOption: true,
        width: 100,
    },
    {
        header: 'Editar',
        column: 'Edit',
        type: 'icon',
        filterOption: false,
        width: 100,
        action: 'Edit',
        colorBtn: 'primary'
    },
];

export const configTable: TableInterface = {
    iconTitle: 'services',
    widthDiv: '90rem',
    title: 'Servicios',
    rows: [],
    columns: columns,
    optionsComponents: options,
}

const validationSchema = yup.object({
    area: yup.string().required('El campo es requerido'),
    codService: yup.string().required('El campo es requerido'),
    description: yup.string().required('El campo es requerido'),
    cost: yup.string().required('El campo es requerido'),
    avalible: yup.bool().required('El campo es requerido'),
});

const dataForm: DataForm[] = [
    {
        label: 'Codigo',
        type: 'string',
        formName: 'codService',
        name: 'codService',
        value: '',
    },
    {
        label: 'Descripción',
        type: 'string',
        formName: 'description',
        name: 'description',
        value: '',
    },
    {
        label: 'Precio',
        type: 'number',
        formName: 'cost',
        name: 'cost',
        value: '',
    },
    {
        label: 'Disponible',
        type: 'bool',
        formName: 'avalible',
        name: 'avalible',
        value: '',
    },
]

const bodyServices: ServicesData ={
    codService: '',
    description: '',
    cost: '',
    avalible: false,
}

export const formServices: FormStructure = {
    title: 'Agregar Servicios',
    dataForm: dataForm,
    body: bodyServices,
    validationSchema: validationSchema,
    action: 'addServices',
}

