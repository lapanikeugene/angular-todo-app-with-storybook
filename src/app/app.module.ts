import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TitleComponent } from './title/title.component';
import { FormsModule } from '@angular/forms';
import { FormAddComponent } from './form-add/form-add.component';
import { StoreModule } from '@ngrx/store';
import { TodoReducer } from 'src/store/todo.reducer';
import { TodoElementComponent } from './todo-element/todo-element.component';
import { SharedModule } from './sharing.module';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TitleComponent,
    FormAddComponent,
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    StoreModule.forRoot({
      todos:TodoReducer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
