
import { createContext, useContext, useReducer } from 'react';
import { ITodo, Props, ACTIONTYPE } from '../../Types/interfaces';
import { TasksReducer } from './TasksReducer';

const initialTasks: ITodo[] = [];

export const taskContext = createContext<ITodo[]>([]);
const TasksDispatchContext = createContext<React.Dispatch<ACTIONTYPE> | null>(null);

export const TaskProvider = ({children}: Props) => {
const [tasks, dispatch] = useReducer(TasksReducer, initialTasks)

return(
    <taskContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </taskContext.Provider>
)
}

export const useTasks = () : ITodo[] => {
    const value = useContext(taskContext)

    if(value === null){
        throw new Error('useTasks must be used within a TasksProvider')
    }

    return value
}

export const useDispatch = () =>{
    const value = useContext(TasksDispatchContext)

    if(value === null){
        throw new Error('useDispatch must be used within a TasksProvider')
    }

    return value
}





