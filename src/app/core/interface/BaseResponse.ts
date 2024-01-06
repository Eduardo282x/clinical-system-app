import { DataUser } from "./users/users";

export interface BaseResponse { 
    message: string;
    success: boolean;
}

export interface ReponseLogin extends BaseResponse {
    userData: DataUser;
}

export { DataUser };
