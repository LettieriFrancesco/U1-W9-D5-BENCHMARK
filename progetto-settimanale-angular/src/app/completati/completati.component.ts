import { Component } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss'],
})
export class CompletatiComponent {
  todo: Todo[] = [];

  constructor(private todoSvc: TodoService) {}

  ngOnInit() {
    this.todoSvc.getAll().then((todo) => {
      this.todo = todo;
    });
  }
  eliminaToDo(todo: Todo) {
    this.todoSvc.delete(todo).then(() => {
      this.todo = this.todo.filter((t) => t.id != todo.id);
    });
  }
}
