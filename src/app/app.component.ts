import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Basic example using typescript
  name:string = 'Grant';

  // Example of a constructor
  constructor() {

    // Using a console log
    // console.log(123);

    // Simply assinging a value to name
    // this.name = 'Malcolm';

    // Using the changeName method below
    this.changeName('Tembo');

  }

  // Example of a method
  changeName(name:string):void {

    this.name = name;

  }

}
