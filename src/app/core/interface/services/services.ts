export interface Services { 
    IdService: number;
    CodService: string;
    Description: string;
    Cost: number;
    Avalible: boolean;
}

export interface EditService extends Omit<Services, "CodService"> {

}
