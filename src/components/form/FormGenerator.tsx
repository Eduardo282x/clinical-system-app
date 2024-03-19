/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormGeneratorInterface } from "../../interfaces/form.interface";
import { RowAction } from "../../interfaces/table.interface";

import { Button, TextField, Switch } from '../../shared/materialUI'
import { useFormik } from "formik";

export const FormGenerator: React.FC<FormGeneratorInterface> = ({ form, returnDataForm }) => {

    const typeForm = ['text','number'];

    const formik = useFormik<any>({
        initialValues: form.body,
        validationSchema: form.validationSchema,
        onSubmit: (values: any) => sendData(values),
    });

    const sendData = (data: any) => {
        const dataFormSend: RowAction = {
            action: 'addNew',
            dataRow: data
        }
        returnDataForm(dataFormSend)
    }

    return (
        <div>
            <form onSubmit={formik.handleSubmit} className="flex flex-col items-center justify-between p-8 w-[25rem] h-[40rem]" >
                <h1 className="font-bold text-2xl">{form.title}</h1>
                {form.dataForm && form.dataForm.map((field, count) => (
                    (typeForm.includes(field.type) && 
                        <TextField
                            key={count}
                            fullWidth
                            label={field.label}
                            type={field.type}
                            name={field.name}
                            value={formik.values[field.name]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
                            variant="outlined"
                        />
                    ) || 
                    (field.type == 'bool' && 

                        <Switch 
                        key={count}
                        name={field.name}
                        onChange={formik.handleChange}
                        checked={formik.values[field.name]}
                        />
                    )

                ))}

                <Button variant="contained" type="submit" disabled={!formik.isValid}>Enviar</Button>
            </form>
        </div>
    )
}
