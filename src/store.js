import {create} from 'zustand';
import {nanoid} from 'nanoid'

export const useTodos = create(set =>({
    todos:[
        {id:1,title: 'learn js',completed:true},
        {id:2,title: 'learn React', completed:false}
    ],
    loading:false,
    error: null,
    addTodo:(title)=>set(state=>{
        const newTodo = {id:nanoid(), title, coompleted:false}

        return {todos: [...state.todos,newTodo]}

    }),
    massiv: [1,2,3,4]
}))