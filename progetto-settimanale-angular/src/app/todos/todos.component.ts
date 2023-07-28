import { Component } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  newTodo: Partial<Todo> = new Todo('', 0);
  message: string = '';
  constructor(private todoSvc: TodoService, private router: Router) {}

  creaToDo() {
    this.todoSvc.create(this.newTodo).then((res) => {
      this.message = `Evento Creato`;
      setTimeout(() => {
        this.router.navigate(['/completati']);
      }, 3000);
    });
  }
}
