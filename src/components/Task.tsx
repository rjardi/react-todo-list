import { TaskModel } from "../models/task.model"

interface Props {
    taskData: TaskModel,
    handleClick: ()=> void
}

export const Task = ({taskData,handleClick}:Props)=>{
    return (
        <li className="task">
            <span>{!taskData.done? "☐": "☑"} {taskData.description}</span>
            <button onClick={handleClick}>Eliminar</button>
        </li>
    )
}

