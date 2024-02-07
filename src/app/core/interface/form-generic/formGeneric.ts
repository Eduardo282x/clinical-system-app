import { FormGroup } from "@angular/forms";

export interface FormGeneric {
    label: string;
    formControlName: string;
    type: string;
    value?: any;
    options?: DataSelect[];
    class?: string;
}

export interface DataSelect {
    label: string;
    value: string;
}

export interface EmitFormOne {
    form: FormGroup;
    action :string;
}

export interface registerGeneric {
    NameFull: string;
    Identify: string;
    Birhdate: string;
    Age: string;
    PhonePrimary: string;
    PhoneSecundary: string;
    Email: string;
    Address: string;
    Sex: string;
}