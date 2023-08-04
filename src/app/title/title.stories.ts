import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { TitleComponent } from "./title.component";


const meta: Meta<TitleComponent> = {
    title: 'UI/Title',
    component: TitleComponent,
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/angular/configure/story-layout
        layout: 'fullscreen',
      },
  };

export default meta;

type Story = StoryObj<TitleComponent>;


export const Title:Story =  {
    args: {
     
    },
  };

