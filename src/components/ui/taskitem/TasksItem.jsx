
import '../../../App.css'
import style from './Taskitem.module.css'
import React, {useState, useCallback} from 'react'
import TasksForm from '../Taskform/TasksForm'
import Checkbox from '../checkbox/Checkbox';

function TasksItem({text, id, onDelete, onEdit, onDone}) {
  const [isEditing, setIsEditing] = useState(false);
  const [check,setCheck] = useState(false);


  const toggleChange = useCallback(e => {
    setCheck(prev => !prev)
    const checked = e.target.checked
      const doneTAsk = {
      id: id,
      text: text,
      status: checked,
    }
    onDone(doneTAsk)
  },[])

  const toggleEditing = () => setIsEditing(prev => !prev)

  const handleDelete = () => onDelete(id)


  const handleEdit = e => {
    e.preventDefault()

    const formData = new FormData(e.target);

    const editedTAsk = {
      id: id,
      text: formData.get("text"),
      status: false,

    }
    
    // formData.forEach((value, key) => (editedTAsk[key] = value))
    // не понимаю почему форм дата форич не добавляет в объект статус?

    onEdit(editedTAsk)
    toggleEditing(false)
  }

  return (

  <li className={style.container}>
      {isEditing?(
        <TasksForm
        onSubmit={handleEdit}
        titel={'Edit'}
        defaultValues={{text}}
        />
      ):(
        <>
      {check ? (<p className='done'>{text}</p>):(<p>{text}</p>)}
      <button type='button' onClick={toggleEditing}>Edit Task</button>
      <button type='button' onClick={handleDelete}>Delete</button>
     <Checkbox
     onChenge={toggleChange}
     />
        </>
      )}
  </li>

  )
}


export default TasksItem