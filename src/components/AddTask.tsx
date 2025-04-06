// import { TaskModel } from "../models/task.model"

import React, { useState } from "react"
import { TaskModel } from "../models/task.model"

interface Props {
    handleAddTask: (task:TaskModel)=>void
}

export const AddTask=({handleAddTask}:Props)=>{

    const [description, setDescription]=useState("")

    const handleSubmit=(event: React.FormEvent)=>{
        event.preventDefault();
        const newTask: TaskModel={
            id: crypto.randomUUID(),
            description: description,
            done: false
        }
        handleAddTask(newTask);
        setDescription("")
    }

    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setDescription(event.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* <label>Nueva Tarea:</label> */}
                <input 
                    type="text" 
                    value={description} 
                    placeholder="Nueva tarea...."
                    onChange={handleChange}/>
                <button type="submit">Añadir</button>
            
            </form>

        </>

    )
}

// export function AddTask(
//     onClose:()=>void
//     ){
//     return (
//         <>
//             <div>Nueva Tarea:</div>
//             <input type="text" name="" id="" />
//             <button onClick={onClose}>Añadir</button>
//         </>

//     )


// }