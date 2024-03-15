import { Button } from "@mui/material";
import { FormGeneratorInterface } from "../../interfaces/form.interface"

export const FormGenerator: React.FC<FormGeneratorInterface> = ({form ,returnDataForm}) => {

    console.log(form);

    const sendData = () =>{
        const boyd = {
            services: 'a'
        }
        returnDataForm(boyd)
    }
    
    return (
        <div>
            FormGenerator {form.title}

            <Button onClick={sendData}>Click</Button>
        </div>
    )
}
