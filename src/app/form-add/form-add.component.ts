import { Component, Input, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodosActions } from 'src/store/todos.actions';
import { provideMockStore } from '@ngrx/store/testing';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent {
  @Input() inputDoStory:string|null = null;
  inputTodo:string =this.inputDoStory ? this.inputDoStory :"";

  disabledButton =  this.inputTodo === "";
  
  constructor(private store:Store ){
    
  }
  // storybook changes.. 
  ngOnChanges(changes: SimpleChanges) {
    if ('inputDoStory' in changes) {
      this.inputTodo = this.inputDoStory || "";
      this.disabledButton = this.inputTodo === "";
    }
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
