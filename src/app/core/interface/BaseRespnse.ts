export interface BaseResponse { 
    message: string;
    success: boolean;
}

export interface ReponseLogin extends BaseResponse {
    userData: DataUser;
}

interface DataUser {
    Id: number;
    Name: string;
    Lastname: string;
    Username: string;
    Password: string;
}