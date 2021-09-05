/* import { useEffect, useState } from "react";
import Form from "../../../Components/Form/Form";
import FormInput from "../../../Components/Form/FormInput";
import Button from "../../../Components/Button/Button";
const API = "https://api-tasks.vercel.app/api" */

/* const HomeForm = (props) => { */

    /* const { tasks, taskId, setTaskId, getTasks } = props; */
    
    /* Tarea actual */
    /* const [form, setForm] = useState({
        responsable: "",
        description: "",
    }); */

    /* Crear una nueva tarea */
    /* const createTask = async () => {
        const { responsable, description } = form

        const config = {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                responsable: responsable,
                description: description
            })
        }
        const response = await fetch(`${API}/task`, config)
        const data = await response.json()
        alert ("Success")
    } */

    /*  */
    /* const patchTask = async (id) => {
        const {responsable, description} = form
        const config = {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            responsable: responsable,
            description: description
          })
        }
        const response = await fetch(`${API}/task/${id}`, config)
        const data = await response.json()
        getTasks()
      } */

    /* Maneja el cambio de valor de input */
    /* const handleChange = e => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        })
        console.log(e.target.value)
    }

    return (
        <Form>
            <FormInput
                label="Responsable"
                id="inResponsable"
                value={form.responsable}
                handleChange={handleChange}
                name="responsable"
            />
            <FormInput
                type="textArea"
                label="Descripción"
                id="inDescription"
                value={form.description}
                handleChange={handleChange}
                name="description"
            />
            <Button
                type="submit"
                text="Enviar"
                onClick={createTask}
            />
        </Form>
    )
} */

/* export default HomeForm; */