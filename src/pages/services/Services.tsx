/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDataApi } from "../../backend/BasicAxios"
import { ServicesData } from "../../interfaces/services.interface";
import { TableComponents } from "../../components/table/TableComponents";
import { bodyServices, configTable, formServicesData } from "./services.data";
import { RowAction, TableInterface } from "../../interfaces/table.interface";
import * as React from 'react';
import { Dialog } from "../../shared/materialUI";
import { FormGenerator } from "../../components/form/FormGenerator";
import { FormStructure } from "../../interfaces/form.interface";

export const Services = () => {

    const [config, setConfig] = React.useState<TableInterface>(configTable);
    const [formService, setFormService] = React.useState<FormStructure>(formServicesData);
    const [servicesData, setServicesData] = React.useState<ServicesData[]>([]);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getServices = () => {
        getDataApi('services').then((data: ServicesData[]) => {
            setServicesData(data);
            const conf = configTable;
            conf.rows = data;
            setConfig(conf);
        });
    }

    const servicesAvalibles = () => {
        const dataNormal = config;
        dataNormal.rows = config.rows.filter((ser: ServicesData) => ser.avalible == true);
        setConfig(dataNormal);
    }

    const servicesAll = () => {
        const dataNormal = config;
        dataNormal.rows = servicesData;
        setConfig(dataNormal);
    }
    
    const changeData = (filter: boolean) => {
        if(!filter){
            servicesAvalibles();
        } else {
            servicesAll();
        }
    }

    React.useEffect(() => {
        getServices();
    }, []);

    const getData = (data: RowAction) => {
        const {action} = data
        const dataRow: ServicesData = data.dataRow;
        const form: FormStructure = formService;
        if(action == 'Add'){
            form.title = 'Agregar Servicio';
            form.body = bodyServices;
            setFormService(form);
        }
        if(action == 'addNew'){
            console.log(data.dataRow);
            
            handleClose()
        }

        if(action == 'Edit'){
            form.title = 'Editar Servicio';
            form.body = dataRow;
            setFormService(form);
        }

        if(action == 'Add' || action == 'Edit'){
            handleClickOpen();
        }
    }

    return (
        <div className="flex items-center justify-center m-auto w-full">
            <TableComponents tableConfig={config} returnData={getData} secondFunction={changeData}/>

            <Dialog
                open={open}
                onClose={handleClose}
            >
                <FormGenerator form={formService} returnDataForm={getData}></FormGenerator>
            </Dialog>
        </div>
    )
}
