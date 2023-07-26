
import TasksItem from '../ui/Taskitem/TasksItem';
import CreateTaskForm from './CreateTaskForm';
import { useSelector, useDispatch } from 'react-redux';
import { removetask } from './TasksSlicer';



function Tasks() {

  const tasks = useSelector(state => state.todos.tasks);
  const dispatch = useDispatch();
  
  const handleDelete = (id) => {
    dispatch(removetask(id));
  };

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
        onDelete={handleDelete}
        />
        ))}
      </ul>
    </div>
  )
}

export default Tasks