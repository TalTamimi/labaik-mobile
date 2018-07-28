import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'app-header.html'
})
export class AppHeaderComponent {

  text: string;

  constructor() {
    console.log('Hello AppHeaderComponent Component');
    this.text = 'Hello World';
  }

}
