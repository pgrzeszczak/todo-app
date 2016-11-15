import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Todo } from './todo.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
  private backendUrl: string = 'http://localhost:1337';
  constructor(private http: Http) {}

  getAll(): Observable<Todo[]> {
    return this.http.get(this.backendUrl + '/todo')
      .map((result) => result.json());
  }

  create(todo: Todo): Observable<Todo> {
    return this.http.post(this.backendUrl + '/todo', todo)
      .map((result) => result.json());
  }

  update(todo: Todo): Observable<Todo> {
    return this.http.put(`${this.backendUrl}/todo/${todo.id}`, todo)
      .map((result) => result.json());
  }

  delete(todo: Todo): Observable<Todo> {
    return this.http.delete(`${this.backendUrl}/todo/${todo.id}`)
      .map((result) => result.json());
  }
}
