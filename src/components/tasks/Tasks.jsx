
import TasksItem from '../ui/Taskitem/TasksItem';
import CreateTaskForm from './CreateTaskForm';
import { useSelector } from 'react-redux';



function Tasks() {

  const tasks = useSelector(state => state.todos.tasks);

  return (
    <div>
      <CreateTaskForm 
      titel ={'Add task'}/>
      <ul>
        {tasks.map(task =>(
        <TasksItem 
        text ={task.text}
        id={task.id}
        key={task.id}
        />
        ))}
      </ul>
    </div>
  )
}

export default Tasks