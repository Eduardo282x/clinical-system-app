export interface TempFacture {
    IdServices: number;
    CodService: string;
    Description: string;
    Amount: number;
    Cost: number;
    Total: number;
}

export interface NewTempFacture {
    IdUser: number;
    IdServices: number;
    Amount: number;
}