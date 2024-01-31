export interface EmitAction {
    action: string;
    data: RowsEmit | any;
}

export interface RowsEmit {
    Id: number,
    NameFull: string;
}