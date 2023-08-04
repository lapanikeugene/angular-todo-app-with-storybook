import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoI } from 'src/store/todo.model';
import { selectTodos } from 'src/store/todo.selector';
import { TodosActions } from 'src/store/todos.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todosArray$: Observable<TodoI[]> | undefined; 

  todos$ = this.store.select(selectTodos);
  title = 'todoapp';
  constructor(private store:Store ){}

  ngOnInit(){
    this.todosArray$ = this.store.select(selectTodos); // Assuming you are using NgRx


  }
}
