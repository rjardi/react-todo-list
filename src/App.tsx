import { useEffect, useState } from 'react'
// import { useContext } from 'react'


import './App.css'
import { TaskModel } from './models/task.model'
import {AddTaskPortal} from './components/ModalPortal/AddTaskPortal'
import { Task } from './components/Task'
import { addTask, deleteTask, getTasks } from './services/tasks.service'

function App() {

//   const INITIAL_TASKS: TaskModel[]=[
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
  const [items, setTasks]= useState<TaskModel[]>([])

  const tasksFecther=async ()=>{
    const tasks= await getTasks();
    setTasks(tasks);
  }

  useEffect(()=>{
    tasksFecther();
  },[])

  const handleClick=(id:string)=>()=>{
    deleteTask(id);
    setTasks(prevTasks=>{
      return prevTasks.filter(task=>task.id!==id)
    })
  }

  const handleAddTask=(newTask:TaskModel)=>{
    addTask(newTask);
    setTasks(prevTasks=>[...prevTasks, newTask])
  }

  return (
    <>
      <main>
        <h1>Lista de tareas: ToDo List</h1>
        {/* Insertar componente TasksList */}
        <AddTaskPortal
        handleAddTask={handleAddTask}/>
        {!items? (
          <h2>No hay elementos introduce alguna tarea..</h2> 
        ):(
          <ul>
            {items.map(item=>{
              return (
                <Task
                  key={item.id}
                  taskData={item}
                  handleClick={handleClick(item.id)}
                />
              )
            })}
          </ul>
        )}
      </main>
    </>
  )
}

export default App
