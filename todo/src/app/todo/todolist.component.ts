import { Component, Input } from '@angular/core';
import { Todo } from './todo.interface';

@Component({
  selector: 'todo-list',
  templateUrl: './todolist.component.html'
})
export class TodoListComponent {
  @Input() todos: Todo[];
}
