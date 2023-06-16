import React, {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'

import TasksForm from '../ui/Taskform/TasksForm';
import TasksItem from '../ui/taskitem/TasksItem';
import Donetasks from 'components/ui/Donetasks/Donetasks';


const taskData = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

const DoneTasks = taskData.filter(element => element.status !== false);

function Tasks() {
  const [tasks,setTasks] = useState(taskData)
 
  const addTask = e => {
    e.preventDefault();
    
    const formData = new FormData (e.target);
    if(formData.get("text") !== ''){
      const task = {
        id: uuidv4(),
        text: formData.get("text"),
        status: false,
    };
    setTasks(prev => [...prev, task]);
    e.target.reset()
    } else{
      return
    }
  };

  useEffect(() => {localStorage.setItem('tasks', JSON.stringify(tasks))},[tasks]);

  const deleteTask = id =>{
    setTasks(prev => prev.filter(task => task.id !== id))
    localStorage.setItem('tasks', JSON.stringify(tasks))
  };

  const editTask = newTask =>{
    setTasks(prev => {
      const index = prev.findIndex(task => task.id === newTask.id)
      const copyTasks = [...prev];
      copyTasks[index] = newTask;
      return copyTasks
    })
  }

  const doneTask = done =>{
    setTasks(prev => {
      const index = prev.findIndex(task => task.id === done.id)
      const copyTasks = [...prev];
      copyTasks[index] = done;
      return copyTasks
    })
  }
  
  return (
    <div>
      <TasksForm 
      onSubmit ={addTask}
      titel ={'Add task'}/>
      <ul>
        {tasks.map(task =>(
        <TasksItem 
        text ={task.text}
        id={task.id}
        key={task.id}
        onDelete={deleteTask}
        onEdit={editTask}
        onDone={doneTask}
        />
        ))}
      </ul>
      <ul>
        <h1>DONE TASKS</h1>
        {DoneTasks.map(task =>(
          <Donetasks
          onDelete={deleteTask} 
          text={task.text}
          id={task.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default Tasks