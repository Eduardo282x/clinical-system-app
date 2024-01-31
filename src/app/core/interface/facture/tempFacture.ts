export interface GetFactures {
    tempFactures: TempFacture[];
    IdFacture:    number;
}

export interface TempFacture {
    IdServices:  number;
    IdFacture:   number;
    CodService:  string;
    Description: string;
    Amount:      number;
    Cost:        number;
    Total:       number;
}

export interface NewTempFacture {
    IdUser: number;
    IdClient: number;
    IdServices: number;
    Amount: number;
}

export interface DataTransfer {
    Phone:    string;
    Ref:      number;
    Bank:     number;
    Identity: string;
    PayMent:  number;
    Total:    number;
}

export interface TotalTransfer {
    Iva:      number;
    Subtotal: number;
    Total:    number;
}