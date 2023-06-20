import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import TasksForm from 'components/ui/Taskform/TasksForm'

function CreateTaskForm({ onCreateTask, defaultValues = {}, titel }) {
        const handleSubmit = e => {
          e.preventDefault()
      
      
          const formData = new FormData(e.target)
          if (formData.get('text') !== '') {
            const task = {
              id: uuidv4(),
              text: formData.get('text'),
              status: false,
            }
            onCreateTask(task)
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