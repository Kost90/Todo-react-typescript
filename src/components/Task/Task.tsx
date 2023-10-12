import { memo, useState } from "react";
import { useDispatch } from "../context/Tasks";
import { TASK_ACTION_TYPES, TaskProps, ITodo } from "../../Types/interfaces";

export interface ACTIONTYPE {
  type: TASK_ACTION_TYPES;
  payload: Partial<ITodo>;
}

const Task = memo(({ task }: TaskProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handelChangeDone = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch({
      type: TASK_ACTION_TYPES.changeTask,
      payload: {
        ...task,
        done: e.currentTarget.checked,
      },
    });
  };

  const handleEdit = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch({
      type: TASK_ACTION_TYPES.changeTask,
      payload: {
        ...task,
        text: e.currentTarget.value,
      },
    });
  };

  const handelDelete = () => {
    dispatch({
      type: TASK_ACTION_TYPES.deleteTask,
      payload: {
        ...task,
        id: task.id,
      },
    });
  };

  const showForm = () => {
    setIsEditing(true);
  };

  const hideForm = () => {
    setIsEditing(false);
  };

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input value={task.text} onChange={handleEdit} />
        <button onClick={hideForm}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={showForm}>Edit</button>
      </>
    );
  }

  return (
    <div key={task.id}>
      <input type="checkbox" checked={task?.done} onChange={handelChangeDone} />
      {taskContent}
      <button onClick={handelDelete}>Delete</button>
    </div>
  );
});

export default Task;
