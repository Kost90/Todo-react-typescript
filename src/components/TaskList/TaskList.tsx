import { memo, useMemo } from "react";
import Task from "../Task/Task";
import { useTasks } from "../context/Tasks";
import { useTheme } from "../context/Theme";
import { createTodos } from "../../Utils/Utils";
import { ITodo } from "../../Types/interfaces";

const TaskList = memo(() => {
  const tasks = useTasks();
  const {theme} = useTheme();
  const actualTodos:ITodo[] | [] = useMemo(() => createTodos<ITodo>(tasks), [tasks]);

  console.log(tasks)

  return (
    <ul className={theme}>
      {actualTodos.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
});

export default TaskList;
