import { Component } from '@angular/core';

/**
 * Generated class for the ConfirmRegistrationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'confirm-registration',
  templateUrl: 'confirm-registration.html'
})
export class ConfirmRegistrationComponent {

  text: string;

  constructor() {
    console.log('Hello ConfirmRegistrationComponent Component');
    this.text = 'Hello World';
  }

}
