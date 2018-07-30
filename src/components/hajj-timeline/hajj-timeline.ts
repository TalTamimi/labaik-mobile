import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { timelineContent } from './mock-data';

@Component({
  selector: 'hajj-timeline',
  templateUrl: 'hajj-timeline.html'
})
export class HajjTimelineComponent {

  content = timelineContent[0]; // 0 to 5 indicates hajj days from 8 to 13
  isExpanded = false;

  constructor(public navCtrl: NavController) {
    // get today's date and assign proper content to 'content' variable
  }

  expandTimeline(event) {
    this.isExpanded = !this.isExpanded;
  }

  pushPage(event) {
    this.isExpanded = false;
    this.navCtrl.push('HajjGuidePage');
  }

}
