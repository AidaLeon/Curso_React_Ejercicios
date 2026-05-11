interface Todo{
    id: number;
    text: string;
    completed: boolean;
}
interface TaskState{
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

export type TaskAction = 
|{type: 'ADD_TODO', payload: {text: string}}
| {type: 'TOGGLE_TODO', payload: {id: number}}
|{type: 'DELETE_TODO', payload: {id: number}} 




export const taskReducer =(state:TaskState, action):TaskState =>{


    
}
    
    return{}
}