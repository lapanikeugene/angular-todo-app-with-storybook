import { createSelector, createFeatureSelector, State } from '@ngrx/store';
import { TodoI } from './todo.model';
 
export const selectTodoState = createFeatureSelector<TodoI[]>('todos');

export const selectTodos = createSelector(selectTodoState, state => state);