export interface MenuOption {
    icon:string;
    label: string;
    module: string;
    selectedModule: boolean;
}

export interface Menu{
    title: string;
    icon: string;
    deploy?: boolean;
    redirect?: string;
    children?: MenuChild[]
}

export interface MenuChild {
    title: string;
    icon: string;
    redirect: string;
}