import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from './todo.interface';

@Component({
  selector: 'todo-new',
  templateUrl: './todonew.component.html'
})
export class TodoNewComponent {

  @Output() todoCreated: EventEmitter<Todo> = new EventEmitter<Todo>();
  private todoName: string = '';

  addTodo() {
    this.todoCreated.emit({
      name: this.todoName,
      done: false
    });
    this.todoName = '';
  }
}
