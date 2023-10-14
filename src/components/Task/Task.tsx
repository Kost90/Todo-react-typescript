import { memo, useState } from "react";
import { useDispatch } from "../context/Tasks";
import { TASK_ACTION_TYPES, TaskProps, ITodo } from "../../Types/interfaces";
import styles from './Task.module.css'
import { useTheme } from "../context/Theme";

export interface ACTIONTYPE {
  type: TASK_ACTION_TYPES;
  payload: Partial<ITodo>;
}

const Task = memo(({ task }: TaskProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const theme = useTheme();

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
        <button onClick={hideForm} className={theme.theme === 'light' ?'dark-btn':'light-btn'}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={showForm} className={theme.theme === 'light' ?'dark-btn':'light-btn'}>Edit</button>
      </>
    );
  }

  return (
    <div key={task.id} className={theme.theme === 'light' ?`${styles.container_task_dark}`:`${styles.container_task_light}`}>
      <input type="checkbox" checked={task?.done} onChange={handelChangeDone} />
      {taskContent}
      <button onClick={handelDelete} className={theme.theme === 'light' ?'dark-btn':'light-btn'}>Delete</button>
    </div>
  );
});

export default Task;
