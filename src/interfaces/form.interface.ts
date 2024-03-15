/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FormGeneratorInterface {
    form: FormStructure;
    returnDataForm: any;
}

export interface FormStructure {
    title: string;
    dataForm: DataForm[];
    body: object;
    validationSchema: object;
    action: string;
}

export interface DataForm {
    label: string;
    type: string;
    formName: string;
    value: string | number ;
}