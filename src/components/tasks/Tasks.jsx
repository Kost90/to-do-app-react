import React, {useState, useEffect} from 'react'
import TasksItem from '../ui/Taskitem/TasksItem';
import Donetasks from 'components/ui/Donetasks/Donetasks';
import CreateTaskForm from './CreateTaskForm';


const taskData = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

const DoneTasks = taskData.filter(element => element.status !== false);

function Tasks() {
  const [tasks,setTasks] = useState(taskData)

  const onCreateTask = (task) => setTasks(prev => [...prev, task])
 
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

  useEffect(() => {localStorage.setItem('tasks', JSON.stringify(tasks))},[tasks]);
  
  return (
    <div>
      <CreateTaskForm 
      onCreateTask={onCreateTask}
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