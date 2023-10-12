import { useState, useLayoutEffect } from "react";
import { useTheme } from "../context/Theme";
import { useTasks } from "../context/Tasks";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";

function TaskContainer() {
    const [numTodo, setNumTodo] = useState<number>(0);
    const { theme, onChangeTheme } = useTheme();
    const tasks = useTasks();
  
    useLayoutEffect(() => {
      setNumTodo(tasks.length);
      document.title = `${numTodo} tasks`;
    }, [numTodo, tasks]);

    return (
      <div className={theme}>
        <label>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={onChangeTheme}
          />
          Dark mode
        </label>
        <TaskInput />
        <TaskList />
        <p>You have {numTodo} tasks</p>
      </div>
    );
  }
  
  export default TaskContainer;
  