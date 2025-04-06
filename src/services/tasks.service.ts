// import { useEffect, useState } from "react";

import { TaskModel } from "../models/task.model";

// const TaskList = () => {
//   const [tasks, setTasks] = useState<TaskApiModel[]>([]);

export const getTasks=()=>{
    return fetch("http://localhost:5000/tasks")
    .then((response) =>{
       const data:Promise<TaskModel[]>=response.json();
       return data
    })
    // .then((data) => setTasks(data))
    .catch((error) => {
        console.error("Error fetching tasks:", error);
        return [];

    })

  }

export const addTask=(newTask:TaskModel)=>{
    // Hacer una solicitud POST para agregar una tarea al servidor
    fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
        })
        .then((response) => response.json())
        .catch((error) => console.error("Error adding task:", error));
}

export const deleteTask=(id:string)=>{
    fetch(`http://localhost:5000/tasks/${id}`, 
        {
        method: "DELETE",
        })
        .catch((error) => console.error("Error deleting task:", error));
}



//   useEffect(() => {
//     // Obtener las tareas desde el servidor (JSON Server)
//     fetch("http://localhost:5000/tasks")
//       .then((response) => response.json())
//       .then((data) => setTasks(data))
//       .catch((error) => console.error("Error fetching tasks:", error));
//   }, []);

//   return (
//     <div>
//       <h1>Lista de Tareas</h1>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>
//             {task.done ? "☑" : "☐"} {task.description}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TaskList;
