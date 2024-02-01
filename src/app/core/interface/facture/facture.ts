export interface Factures {
    IdFacture:   number;
    NameFull:    string;
    Identify:    string;
    DateFacture: Date;
}

export interface BodyFacture{
    IdUser: number;
    IdClient: number;
    SubTotal: number;
    BankClient: number;
    Total: number;
    Phone: string;
    Identity: string;
    IdPayment: number;
    Ref: number;
}