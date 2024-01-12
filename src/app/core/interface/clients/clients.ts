export interface Clients { 
    IdClients: number;
    FullName: string;
    Identify: string;
}

export interface BaseClient {
    IdClients: string;
    FullName: string;
    Identify: string;
    Birhdate: string;
    Age: number;
    PhonePrimary: string;
    PhoneSecundary: string;
    Email: string;
    Address: string;
    Sex: string;
}