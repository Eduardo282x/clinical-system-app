import { RegisterBase } from "../BaseResponse";

export interface Employe {
    NameFull: string;
    Identify: string;
    Rol: string;
}
export interface SortEmploye {
    Id: number;
    NameFull: string;
}

export interface PreviewEmploye {
    NameFull: string;
    Idenfity: string;
    Rol: string;
    DateInit: Date;
    SecutiryKey: string;
}

export interface EmployesComplete extends RegisterBase {
    Id?:             number;
    Birthdate:      Date;
    MedicalData:    string;
    SecurityKey:    string;
    Username:       string;
    Password:       string;
    Rol:            number;
}
