import { Component } from '@angular/core';

@Component({
  selector: 'hajj-timeline',
  templateUrl: 'hajj-timeline.html'
})
export class HajjTimelineComponent {

  text: string;

  constructor() {
    console.log('Hello HajjTimelineComponent Component');
    this.text = 'Hello World';
  }

}
