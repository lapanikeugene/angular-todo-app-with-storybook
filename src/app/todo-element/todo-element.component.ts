import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoI } from 'src/store/todo.model';
import { TodosActions } from 'src/store/todos.actions';

@Component({
  selector: 'app-todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.css'],
})
export class TodoElementComponent {
  @Input() todo:TodoI | undefined
  @Input() index:number =0

  constructor(public store:Store){}

  toggleDone(id:number){
    // this.todos.map((a,i)=>{
    //     if(id === i) a.completed = !a.completed;
    //     return a;
    // })
    // return "";
    this.store.dispatch(TodosActions.completeTODO({index:id}))

  }

  deleteTodo(id:number){

  //   console.log("delete",id);
  //  this.todos=  this.todos.filter((a,i)=> i!==id);
  this.store.dispatch(TodosActions.removeTODO({index:id}))

  }
 

}
