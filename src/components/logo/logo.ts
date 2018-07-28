import { Component } from '@angular/core';

@Component({
  selector: 'logo',
  templateUrl: 'logo.html'
})
export class LogoComponent {

  text: string;

  constructor() {
    console.log('Hello LogoComponent Component');
    this.text = 'Hello World';
  }

}
