import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  // Prop being passed in
  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  // Set Dynamic Classes
  setClasses() {

    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    }

    return classes;

  }

}
