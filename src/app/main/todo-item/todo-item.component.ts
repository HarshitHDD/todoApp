import { Component, EventEmitter, Input, Output } from '@angular/core';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: todo;
  @Output() deleteTodoEvent = new EventEmitter();
  @Output() checkedTodoEvent = new EventEmitter();

  onDeleteClick(todo: todo) {
    this.deleteTodoEvent.emit(todo)
  }
  onCheck(todo :todo) {
    this.checkedTodoEvent.emit(todo)

  }
}
