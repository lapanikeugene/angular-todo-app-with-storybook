import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodosActions } from 'src/store/todos.actions';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent {
  inputTodo:string ="";
  disabledButton = this.inputTodo === "";
  constructor(private store:Store ){
    
  }
  
  onKeypressEvent(event: any){
   console.log(event);
    this.disabledButton = event.length === 0;
  }
  addTodo(){
     if(this.inputTodo.length===0) return; 
    // this.todos.push({content: this.inputTodo,completed:false});
    // this.inputTodo = "";
    this.store.dispatch(TodosActions.addTODO({item:{content:this.inputTodo , completed:false}}));
    this.inputTodo="";
  }
}
