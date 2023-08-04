import { Action, createAction, createActionGroup, props } from '@ngrx/store';
import { TodoI } from './todo.model';

export const TodosActions = createActionGroup({
  source: 'Todos',
  events: {
    'Add TODO': props<{ item:TodoI }>(),
    'Remove TODO': props<{ index:number }>(),
    'Complete TODO': props<{ index:number }>(),
    'Get TODOs':  props<{ todos: ReadonlyArray<TodoI> }>(),
    // 'Remove Book': props<{ bookId: string }>(),
  },
});
