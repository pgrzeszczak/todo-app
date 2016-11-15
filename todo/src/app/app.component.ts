import { Component, OnInit } from '@angular/core';
import { Todo } from './todo/todo.interface';
import { TodoService } from './todo/todo.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Todo app';
  private todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getAll().subscribe((todos) => {
      this.todos = todos;
    }, (response) => {
      console.log("Błąd :(", response);
    });
  }

  addTodoToList(todo: Todo) {
    this.todoService.create(todo).subscribe((createdTodo) => {
      this.todos.push(createdTodo);
    }, (response) => {
      console.log("Błąd :(", response);
    });
  }

  removeTodoFromList(todo: Todo) {
    this.todoService.delete(todo).subscribe((deletedTodo) => {
      _.remove(this.todos, {id: todo.id});
    }, (response) => {
      console.log("Błąd :(", response);
    });
  }
}
