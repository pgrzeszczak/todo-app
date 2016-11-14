import { Component } from '@angular/core';
import { Todo } from './todo.interface';

@Component({
  selector: 'todo-new',
  templateUrl: './todonew.component.html'
})
export class TodoNewComponent {

  private todoName: string = '';

  addTodo() {
    console.log(this.todoName);
  }
}
