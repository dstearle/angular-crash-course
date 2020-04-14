import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services//todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor(private todoService:TodoService) { }

  // Lifecycle method similar to created in Vue
  ngOnInit() {

    // Moved to todo.service.ts
    // Array of todos to be listed
    // this.todos = [

    //   {
    //     id: 1,
    //     title: 'Todo One',
    //     completed: false
    //   },
    //   {
    //     id: 2,
    //     title: 'Todo Two',
    //     completed: true
    //   },
    //   {
    //     id: 3,
    //     title: 'Todo Three',
    //     completed: false
    //   },

    // ]

    // Imported from services
    this.todoService.getTodos().subscribe(todos => {

      this.todos = todos;

    });

  }

  // To delete todo items
  deleteTodo(todo:Todo) {

    // Filters out the item that has a matching id
    this.todos = this.todos.filter(t => t.id !== todo.id);

  }

}
