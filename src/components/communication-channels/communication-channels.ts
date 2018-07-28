import { Component } from '@angular/core';

@Component({
  selector: 'communication-channels',
  templateUrl: 'communication-channels.html'
})
export class CommunicationChannelsComponent {

  text: string;

  constructor() {
    console.log('Hello CommunicationChannelsComponent Component');
    this.text = 'Hello World';
  }

}
