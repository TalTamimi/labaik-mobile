import { Component } from '@angular/core';

/**
 * Generated class for the LanguageSelectionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'language-selection',
  templateUrl: 'language-selection.html'
})
export class LanguageSelectionComponent {

  text: string;

  constructor() {
    console.log('Hello LanguageSelectionComponent Component');
    this.text = 'Hello World';
  }

}
