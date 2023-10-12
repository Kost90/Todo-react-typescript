export interface ITodo{
    id: number;
    text: string;
    done: boolean;
}

export type Props = {
    children?: React.ReactNode;
  };

export enum TASK_ACTION_TYPES {
    addTask = "ADD_TASK",
    changeTask = "CHANGE_TASK",
    deleteTask = "DELETE_TASK",
  };

  export interface ACTIONTYPE{
    type: TASK_ACTION_TYPES;
    payload: {
      id:number;
      text:string;
      done:boolean;
    };
  }

  export interface TaskProps {
    task: ITodo;
  }