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
  areTodos!: boolean;

  constructor(private todoSvc: TodoService) {}

  ngOnInit(): void {
    this.todoSvc.getAll().then((todo) => {
      this.todo = todo;
      if (this.todo.length > 0) {
        this.areTodos = true;
      } else {
        this.areTodos = false;
      }
    });
  }
  eliminaToDo(singolo: Todo) {
    this.todoSvc.delete(singolo).then(() => {
      this.todo = this.todo.filter((t) => t.id != singolo.id);
    });
  }
}
