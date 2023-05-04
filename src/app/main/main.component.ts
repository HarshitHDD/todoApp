import { Component, Input } from '@angular/core';
import { todo } from '../todo';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  localItem: string;
  title = 'Todo-App';
  todos: todo[];
  // localItem: "";
  constructor() {
    this.localItem = localStorage.getItem("todos")!;
    if (localStorage.getItem("todos") == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem)
    }
    console.log(this.todos)
  }
  deleteTodo(todo: todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos))

  }
  addTodo(todo: todo) {
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  checkedTodo(todo: todo) {
    let index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

}