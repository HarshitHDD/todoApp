import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { todo } from 'src/app/todo';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  @Output() addTodoEvent: EventEmitter<todo> = new EventEmitter();
  title = '';
  description = '';
  active = false;
  onSubmit(f: NgForm) {
    if (f.valid) {
      const todo = {
        title: this.title,
        description: this.description,
        active: this.active
      }
      this.addTodoEvent.emit(todo);
    }
  }
}
