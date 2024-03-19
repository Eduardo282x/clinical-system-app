/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FormGeneratorInterface {
    form: FormStructure;
    returnDataForm: any;
}

export interface FormStructure {
    title: string;
    dataForm: DataForm[];
    body: any;
    validationSchema: any;
    action: string;
}

export interface DataForm {
    label: string;
    type: string;
    name: string;
    formName: string;
    value: string | number ;
}