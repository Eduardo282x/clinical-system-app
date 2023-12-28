export interface Recuperar {
    title: string;
    typeText: string;
    data: RecuperarData[]
}

export interface RecuperarData {
    text: string;
    formControl: string;
}