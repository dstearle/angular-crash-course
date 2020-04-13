import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

const httpOptions = {

  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })

}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // The imported list of todos
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';

  // The amount of todo items we want to return
  todosLimit = '?_limit=5';

  constructor(private http:HttpClient) { }

  // Get Todos
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

    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);

  }

  // Toggle Completed Todos
  toggleCompleted(todo: Todo):Observable<any> {

    const url = `${this.todosUrl}/${todo.id}`;

    return this.http.put(url, todo, httpOptions);

  }


}
