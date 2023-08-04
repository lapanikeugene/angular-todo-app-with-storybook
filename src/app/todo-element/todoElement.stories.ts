import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { TodoElementComponent } from "./todo-element.component";
import { provideMockStore } from '@ngrx/store/testing';
import { TodoI } from "src/store/todo.model";

const initialState:TodoI = {
    content: "test",
    completed: false
};
const meta: Meta<TodoElementComponent> = {
    title: 'UI/TodoElement',
    component: TodoElementComponent,
    tags: ['autodocs'],
// the state for the mockStore

  
    decorators: [
        moduleMetadata({
          providers: [
            provideMockStore({ initialState })
          ]
        }),
    ],
   
  };

export default meta;

type Story = StoryObj<TodoElementComponent>;


export const ActiveTask:Story =  {
    args: {
     index:0,
     todo:{
        content: "todo task",
        completed: false
     }
    },
}

export const CompletedTask:Story =  {
    args: {
     index:0,
     todo:{
        content: "completed task",
        completed: true
     }
    },
}

CompletedTask.parameters={
    docs: {
        description: {
          story: "When user click on the task name, it will be toggle as complited"
        }
      }
}

