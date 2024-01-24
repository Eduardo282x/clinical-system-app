import { Clients } from "./clients/clients";
import { DataUser } from "./users/users";

export interface BaseResponse { 
    message: string;
    success: boolean;
}
export interface ResponseClient extends BaseResponse { 
    client: Clients;
}

export interface ReponseLogin extends BaseResponse {
    userData: DataUser;
}

export interface RegisterBase {
    NameFull:       string;
    Identify:       string;
    Age:            number;
    Sex:            string;
    PhonePrimary:   number;
    PhoneSecundary: number;
    Email:          string;
    Address:        string;
}


export { DataUser };
