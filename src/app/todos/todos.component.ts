import { Component, Input } from '@angular/core';
import { Todo } from '../model/TodoType';
import { Store } from '@ngrx/store';
import { selectTodos } from 'src/store/todo.selector';
import { TodoI } from 'src/store/todo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  title="todos";

  @Input() todos: ReadonlyArray<TodoI> = [];
  
  constructor(public store:Store){}


  ngOnInit():void{
   

    console.log( this.todos);
  }

}
