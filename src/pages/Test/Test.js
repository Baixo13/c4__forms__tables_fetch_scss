import React, { useState, useEffect } from "react";
import FormInput from "../../Components/Form/FormInput";
import Form from "../../Components/Form/Form";
import Button from "../../Components/Button/Button";
const API = process.env.REACT_APP_SERVER

const Test = () => {
  const [tasks, setTasks] = useState([])

  const getTasks = async () => {
    const response = await fetch(`${API}/tasks`)
    const data = await response.json()
    setTasks(data)
  }

  const deleteTask = async (id) => {
    const config = {method: "DELETE"}
    const response = await fetch(`${API}/task/${id}`, config)
    /* const data =  */await response.json()
    getTasks()
  }

  const createTask = async () => {
    const {responsable, description} = form
    const config = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        responsable: responsable,
        description: description
      })
    }
    const response = await fetch(`${API}/task`, config)
    /* const data =  */await response.json()
    getTasks()
  }

  const patchTask = async (id) => {
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
    /* const data =  */await response.json()
    getTasks()
  }

  useEffect(() => {
    getTasks()
  }, [])

/* Tarea actual */
const [form, setForm] = useState({
  responsable: "",
  description: "",
});

/* Maneja el cambio de valor de input */
const handleChange = e => {
  const { name, value } = e.target;
  setForm({
      ...form,
      [name]: value,
  })
  console.log(e.target.value)
}

  return (
    <>
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
      <div>
        {
          tasks.length === 0 ? (
            <div>No hay tareas</div>
          ) : (
            tasks.map(task => {
              return (
                <tr key={task.id}>
                  <td>
                    <button onClick={() => deleteTask(task.id)}>x</button>
                    <button onClick={() => patchTask(task.id)}>patch</button>
                  </td>
                  <td>{task.id}</td>
                  <td>, {task.responsable}</td>
                  <td>, {task.description}</td>
                </tr>
              )
            })
          )
        }
      </div>
    </>
  )
}

export default Test;