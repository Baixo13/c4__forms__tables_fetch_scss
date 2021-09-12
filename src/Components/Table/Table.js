import './style.scss'

const Table = ({tasks, deleteTask, patchTask}) => {
    return (
        <div className="main__table">
            {
                tasks.length === 0 ? (
                    <div>No hay tareas</div>
                ) : (
                    tasks.map(task => {
                        return (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>, {task.responsable}</td>
                                <td>, {task.description}</td>
                                <td>
                                    <button onClick={() => deleteTask(task.id)}>x</button>
                                    <button onClick={() => patchTask(task.id)}>patch</button>
                                </td>
                            </tr>
                        )
                    })
                )
            }
        </div>
    )
}

export default Table