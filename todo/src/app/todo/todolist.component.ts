import { Component, Input } from '@angular/core';
import { Todo } from './todo.interface';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todolist.component.html'
})
export class TodoListComponent {
  @Input() todos: Todo[];

  constructor(private todoService: TodoService) {}

  update(todo: Todo) {
    this.todoService.update(todo).subscribe((updatedTodo) => {
      console.log(updatedTodo);
    }, (response) => {
      console.log("Błąd :(", response);
    });
  }
}
