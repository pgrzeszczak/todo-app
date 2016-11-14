import { Component } from '@angular/core';
import { Todo } from './todo.interface';

@Component({
  selector: 'todo-list',
  templateUrl: './todolist.component.html'
})
export class TodoListComponent {
  private TODOS: Todo[] = [
    {name: "Jakiś todos", done: false},
    {name: "Jakiś inny todos", done: false},
    {name: "Zrobiony todos", done: true},
    {name: "Totalnie inny todos", done: false}
  ];
}
