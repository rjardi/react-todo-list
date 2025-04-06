import { useState } from 'react';
import { createPortal } from 'react-dom';
import "./AddTaskPortal.css"
import { AddTask } from '../AddTask';
import { TaskModel } from '../../models/task.model';

interface Props{
  handleAddTask: (task:TaskModel)=>void
}

export const AddTaskPortal = ({handleAddTask}: Props) =>{

  const [showModal, setShowModal] = useState(false);
  
  const handleClick=()=>{
    setShowModal(false)
  }

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Añadir Tarea
      </button>
      {showModal && createPortal(
        <div className="modal">
          <AddTask
            handleAddTask={handleAddTask}
          />
          <button onClick={handleClick}>Close</button>
        </div>,
        document.body
      )}
    </>
  );
}

