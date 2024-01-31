import { RegisterBase } from "../BaseResponse";

export interface Clients { 
    IdClients: number;
    FullName: string;
    Identify: string;
}
export interface OneClient { 
    Identify: string;
}

export interface ClientsCompleted extends RegisterBase{
    IdClients: string;
    Birhdate: Date;
}

