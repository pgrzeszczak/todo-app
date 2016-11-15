import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/todolist.component';
import { TodoNewComponent } from './todo/todonew.component';

import { TodoService } from './todo/todo.service';

@NgModule({
  declarations: [
    AppComponent, TodoListComponent, TodoNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
