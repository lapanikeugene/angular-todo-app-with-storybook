import { TodoI } from "./todo.model";

export interface State {
  readonly todos: Array<TodoI>;
}