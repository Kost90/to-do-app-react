import "../../../App.css";
import style from "./Taskitem.module.css";
import React, { useState} from "react";
import TasksForm from "../Taskform/TasksForm";
import { useDispatch } from "react-redux";
import { removetask, edittask } from "components/Tasks/TasksSlicer";

function TasksItem({ text, id }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const toggleEditing = () => setIsEditing((prev) => !prev);

  const handleDelete = (id) => {
    dispatch(removetask(id));
  };

  const handleEdit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const editedTAsk = {
      id: id,
      text: formData.get("text"),
      status: false,
    };

    dispatch(edittask(editedTAsk));
    toggleEditing(false);
  };

  return (
    <li className={style.container}>
      {isEditing ? (
        <TasksForm
          onSubmit={handleEdit}
          titel={"Edit"}
          defaultValues={{ text }}
        />
      ) : (
        <>
          <p>{text}</p>
          <button type="button" onClick={toggleEditing}>
            Edit Task
          </button>
          <button type="button" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </>
      )}
    </li>
  );
}

export default TasksItem;
