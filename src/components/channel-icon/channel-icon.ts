import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'channel-icon',
  templateUrl: 'channel-icon.html'
})
export class ChannelIconComponent {

  @Input() channel: any;

  constructor(public navCtrl: NavController) {
  }

  pushPage(event) {
    this.navCtrl.push(this.channel.page, this.channel);
  }

}
