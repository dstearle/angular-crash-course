import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  // Prop being passed in
  @Input() todo: Todo;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  // Set Dynamic Classes
  setClasses() {

    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;

  }

  // Toggle event for marking off todos
  onToggle(todo) {

    // Toggle in UI
    todo.completed = !todo.completed;

    // Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));

  }

  // Delete event for removing todos
  onDelete(todo) {

    console.log('delete');
    
  }

}
