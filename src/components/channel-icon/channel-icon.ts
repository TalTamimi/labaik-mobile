import { Component } from '@angular/core';

@Component({
  selector: 'channel-icon',
  templateUrl: 'channel-icon.html'
})
export class ChannelIconComponent {

  text: string;

  constructor() {
    console.log('Hello ChannelIconComponent Component');
    this.text = 'Hello World';
  }

}
