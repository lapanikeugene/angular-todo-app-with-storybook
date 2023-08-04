import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { FormAddComponent } from "./form-add.component";
import { TitleComponent } from "../title/title.component";
import { provideMockStore } from '@ngrx/store/testing';
import { TodoI } from "src/store/todo.model";
const initialState:TodoI = {
    content: "test",
    completed: false
};

const meta: Meta<FormAddComponent> = {
    title: 'UI/Add',
    component: FormAddComponent,
    tags: ['autodocs'],
    
    decorators: [
        moduleMetadata({
          providers: [
            provideMockStore({ initialState })
          ]
        }),
    ],

    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/angular/configure/story-layout
        layout: 'fullscreen',
      },
  };

export default meta;

type Story = StoryObj<TitleComponent>;


export const ActiveAddToDoForm:Story =  {
    args: {
        inputDoStory:"test"
    },
}
export const disabledAddToDoForm:Story =  {
    args: {
        inputDoStory:""
    },
}

disabledAddToDoForm.parameters={
    docs: {
        description: {
          story: "Button disabled when there is no chars in the input field"
        }
      }
}