// import { createContext, ReactNode, useContext, useState } from "react";
// import { TaskModel } from "../models/task.model";

// interface TaskContextType {
//     tasks: TaskModel[],
//     addTask: (newTask: TaskModel)=>void,
//     deleteTask: (id:string)=>void
// }

// const INITIAL_TASKS: TaskModel[]=[
//     {
//     id: crypto.randomUUID(),
//     description: "Tarea 1",
//     done: false,
//     },
//     {
//     id: crypto.randomUUID(),
//     description: "Tarea 2",
//     done: false,
//     },
// ]

// const TaskContext = createContext<TaskContextType|undefined>(undefined)

// interface Params {
//     children: ReactNode;
//   }

// export const TaskProvider = ({children}:Params)=>{
//     const [tasks, setTasks]=useState(INITIAL_TASKS);

//     const addTask=(newTask:TaskModel)=>{
//         setTasks(prevTasks=>[...prevTasks, newTask]);
//     };

//     const deleteTask=(id:string)=>{
//         setTasks(prevTasks=>{
//             return prevTasks.filter(task=>task.id!==id)
//         })
//     }

//     return (
//         <TaskContext.Provider value={{tasks, addTask, deleteTask}}>
//             {children}
//         </TaskContext.Provider>
//     )
// };

// export const useTaskContext=():TaskContextType =>{
//     const context=useContext(TaskContext);
//     console.log(context)
//     if(!context){
//         throw new Error("useTaskContext must be used within a TaskProvider");
//     }
//     return context;
// }

