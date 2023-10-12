import { ITodo, TASK_ACTION_TYPES, ACTIONTYPE  } from "../../Types/interfaces";

  export const TasksReducer = (tasks:ITodo[], action:ACTIONTYPE) : ITodo[] => {
    switch (action.type) {
      case TASK_ACTION_TYPES.addTask: {
        return [
          ...tasks,
          {
            id: action.payload.id,
            text: action.payload.text,
            done: action.payload.done,
          },
        ];
      }
      case TASK_ACTION_TYPES.changeTask: {
        return tasks.map((t) => {
          if (t.id === action.payload.id) {
            return action.payload;
          } else {
            return t;
          }
        });
      }
      case TASK_ACTION_TYPES.deleteTask: {
        return tasks.filter((t) => t.id !== action.payload.id);
      }
      default: {
        throw new Error(`Unknown action type ${action.type}`);
      }
    }
  };
  