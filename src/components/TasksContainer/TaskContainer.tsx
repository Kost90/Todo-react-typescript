import { useState, useLayoutEffect } from "react";
import { useTheme } from "../context/Theme";
import { useTasks } from "../context/Tasks";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import styles from './TaskContainer.module.css'

function TaskContainer() {
    const [numTodo, setNumTodo] = useState<number>(0);
    const { theme, onChangeTheme } = useTheme();
    const tasks = useTasks();
  
    useLayoutEffect(() => {
      setNumTodo(tasks.length);
      document.title = `${numTodo} tasks`;
    }, [numTodo, tasks]);

    return (
      <div className={`${theme} ${styles.task_container_parent}`}>
        <div className={styles.task_container_child}>
        <label className="checkbox_container">
          <input
          className="checkbox"
            type="checkbox"
            checked={theme === "dark"}
            onChange={onChangeTheme}
          />
          Dark mode
          <span className="checkmark"></span>
        </label>
        <TaskInput />
        </div>
        <TaskList />
        <p>You have {numTodo} tasks</p>
      </div>
    );
  }
  
  export default TaskContainer;
  