/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormGeneratorInterface } from "../../interfaces/form.interface";
import { RowAction } from "../../interfaces/table.interface";
import { Button } from '../../shared/materialUI'
import { Formik, Field, Form } from "formik";

export const FormGenerator: React.FC<FormGeneratorInterface> = ({ form, returnDataForm }) => {
    // const formik = useFormik({
    //     initialValues: {form.body},
    //     validationSchema: form.validationSchema,
    //     onSubmit: (values) => sendData(values),
    // });

    const sendData = (data: any) => {
        console.log(data);

        const dataSend: RowAction = {
            action: 'addNew',
            dataRow: data
        }
        returnDataForm(dataSend)
    }

    return (
        <div>

        
        <Formik
            initialValues={form.body}
            
            onSubmit={(values) => {sendData(values)}}
        >
            <Form className="flex flex-col items-center justify-between p-8 w-[25rem] h-[40rem]">


                <h1 className="font-bold text-2xl">{form.title}</h1>

                {form.dataForm.map((field, count) => (
                    <Field
                        
                        label={field.label}
                        type={field.type}
                        key={count}
                        name={field.name}
                    />

                ))}

                <Button variant="contained" type="submit">Enviar</Button>
            </Form>
        </Formik>
        </div>
    )
}
