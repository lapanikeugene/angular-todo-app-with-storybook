import { TodoI } from './todo.model';
import { createReducer, on } from '@ngrx/store';
import { TodosActions } from './todos.actions';

const initialState: ReadonlyArray<TodoI> = [
  {content:"test",completed:false}
];

export const TodoReducer = createReducer(
  initialState,
  on(TodosActions.addTODO,(state,{item})=>[...state,item]),
  on(TodosActions.completeTODO,(state,{index})=>{
   
    // for (let i = 0; i < state.length; i++) {
    //   arr[i] = state[i];
    // }
    const copy = JSON.parse(JSON.stringify(state)) as typeof state;

    console.log(copy,index,copy[index].completed);
    copy.map((a,i)=>{
      if(i===index) a.completed = !a.completed;
      return a;
    })
    return [...copy];
  }),
  on(TodosActions.removeTODO,(state,{index})=>{
    let arr = [...state];
    arr.splice(index,1);
    return [...arr]
  }),
  on(TodosActions.getTODOs,(state)=>state),
)