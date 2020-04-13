import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl: 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http:HttpClient) { }

  // The list of todo objects
  getTodos():Observable<Todo[]> {

    // Replaced by Http request
    // Array of todos
    // return [

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

    return this.http.get<Todo[]>(this.todosUrl);

  }

}
