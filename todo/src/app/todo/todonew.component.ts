import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from './todo.interface';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-new',
  templateUrl: './todonew.component.html'
})
export class TodoNewComponent {

  @Output() todoCreated: EventEmitter<Todo> = new EventEmitter<Todo>();
  private todoName: string = '';

  constructor(private todoService: TodoService) {}

  addTodo() {
    this.todoService.create({
      name: this.todoName
    }).subscribe((createdTodo) => {
      this.todoCreated.emit(createdTodo);
      this.todoName = '';
    }, (response) => {
      console.log("Błąd :(", response);
    });
  }
}
