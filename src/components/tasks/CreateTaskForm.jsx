import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import TasksForm from 'components/ui/Taskform/TasksForm'
import { useDispatch } from 'react-redux'
import { addtask } from './TasksSlicer'

function CreateTaskForm({ defaultValues = {}, titel }) {
const dispatch = useDispatch();

        const handleSubmit = e => {
          e.preventDefault()
      
      
          const formData = new FormData(e.target)
          if (formData.get('text') !== '') {
            const task = {
              id: uuidv4(),
              text: formData.get('text'),
              status: false,
            }
            dispatch(addtask(task))
            e.target.reset()
          } else {
            return
          }
        }
      
        return (
          <TasksForm
            onSubmit={handleSubmit}
            defaultValues={defaultValues}
            titel={titel}
          />
        )
      }

export default CreateTaskForm