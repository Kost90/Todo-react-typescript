import { useState, useRef, memo, useCallback } from "react"
import { useDispatch, useTasks } from "../context/Tasks";
import { TASK_ACTION_TYPES } from "../../Types/interfaces";
import { useTheme } from "../context/Theme";

const TaskInput = memo(() => {
const [validate, setValidate] = useState(false)
const inputRef = useRef<HTMLInputElement>(null!);
const dispatch = useDispatch();
const tasks = useTasks();
const theme = useTheme();

const handelAddTodo = useCallback(() =>{
    const text = inputRef.current.value;
    if(text.length < 3){
        setValidate(true)
    } else{
      dispatch({
        type: TASK_ACTION_TYPES.addTask,
        payload:{
          id: tasks.length +1,
          text: text,
          done: false,
        }
      })
        setValidate(false)
        inputRef.current.value = '';
    }
},[tasks])

  return (
    <div>
        <input type="text" ref={inputRef} placeholder="Add new task" minLength={3}/>
        <button onClick={handelAddTodo} className={theme?'dark-btn':'light-btn'}>Add Task</button>
        {validate && <p className='validet'>Input must be at least 3 characters long</p>}
    </div>
  )
})

export default TaskInput