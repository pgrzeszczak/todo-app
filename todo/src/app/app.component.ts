import { Component } from '@angular/core';
import { Todo } from './todo/todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo app';
  private TODOS: Todo[] = [
    {name: "Jakiś todos", done: false},
    {name: "Jakiś inny todos", done: false},
    {name: "Zrobiony todos", done: true},
    {name: "Totalnie inny todos", done: false}
  ];

  addTodoToList(todo: Todo) {
    this.TODOS.push(todo);
  }
}
