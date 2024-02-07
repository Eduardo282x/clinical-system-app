import { RegisterBase } from "../BaseResponse";

export interface Clients { 
    IdFacture?: number;
    IdClients: number;
    FullName: string;
    Identify: string;
    onlyShow: string;
    facture: boolean;
}
export interface OneClient { 
    Identify: string;
}

export interface ClientsCompleted extends RegisterBase{
    IdClients?: Number;
    Birhdate: Date;
}

