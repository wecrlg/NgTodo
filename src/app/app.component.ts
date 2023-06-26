import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Todo';
  name: string = 'Ezetendu Williams';

  todoValue: string = '';
  list: Todo[] = [];

  ngOnInit() {
    this.list = [];
    this.todoValue = '';
  }

  addTodo() {
    if (this.todoValue !== '') {
      const newTodo = {
        id: crypto.randomUUID().split('-')[0],
        value: this.todoValue,
        isDone: false,
      };
      this.list.push(newTodo);
      this.todoValue = ""
    }
  }

  deleteTodo(id: string) {
    this.list = this.list.filter((item) => item.id !== id);
  }
}
