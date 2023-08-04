import { NgModule, Directive,OnInit, EventEmitter, Output, OnDestroy, Input,ElementRef, } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoElementComponent } from './todo-element/todo-element.component';

@NgModule({
  imports: [
  ],
  declarations: [
    TodoElementComponent
  ],
  exports: [
    TodoElementComponent
  ]
})

export class SharedModule { }