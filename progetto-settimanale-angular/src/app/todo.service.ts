import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl: string = 'http://localhost:3000/todo';

  constructor() {}

  getAll(): Promise<Todo[]> {
    return fetch(this.apiUrl).then((res) => res.json());
  }
  create(todo: Partial<Todo>): Promise<Todo> {
    return fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    }).then((res) => res.json());
  }
  delete(todo: Todo) {
    return fetch(this.apiUrl + '/' + todo.id, {
      method: 'DELETE',
    }).then((res) => res.json());
  }
}
