import { Component } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfileComponent {

  text: string;

  constructor() {
    console.log('Hello ProfileComponent Component');
    this.text = 'Hello World';
  }

}
