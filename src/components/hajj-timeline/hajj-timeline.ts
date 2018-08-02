import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { timelineContent } from './mock-data';

@Component({
  selector: 'hajj-timeline',
  templateUrl: 'hajj-timeline.html'
})
export class HajjTimelineComponent {

  content = timelineContent[0]; // 0 to 5 indicates hajj days from 8 to 13
  isExpanded = false;
  hajjDays = [];

  constructor(public navCtrl: NavController) {
    // get today's date and assign proper content to 'content' variable
    this.hajjDays = HAJJEVENTS;
  }

  // ngAfterViewInit() {
  //   this.scrollTo();
  // }

  expandTimeline(event) {
    this.isExpanded = !this.isExpanded;
    // if (!this.isExpanded) {
    //   this.scrollTo();
    // }
  }

  pushPage(event) {
    this.isExpanded = false;
    this.navCtrl.push('HajjGuidePage');
  }

  // scrollTo() {
  //   var elmnt = document.getElementById("10");
  //   elmnt.scrollIntoView();
  // }

}

const HAJJEVENTS = [
  {
    "dayNumber": 8,
    "dayName": "Tarwiyah Day",
    "description": "The official day of Hajj is the 8th day, known in Arabic as Yawm at-Tarwiyah or the day of fetching water and quenching the thirst. \n \n Yawm at-Tarwiyah is the official day of commencing the actual rituals of Hajj. Those who have already arrived to Makkah prior to this day most likely had performed the Tamattu’",
    "iconName": "Tarwia"
  },
  {
    "dayNumber": 9,
    "dayName": "Day of Arafat",
    "description": "The ninth day of Dhul-Hijjah is the Day of 'Arafah, since it is on this Day the pilgrims gather at the mountain plain of 'Arafah, praying and supplicating to their Lord. In fact, one hadith says that ‘Hajj is Arafah' (Abu Dawud).  This means Arafah is the sum and substance of Hajj",
    "iconName": "Arafat"
  },
  {
    "dayNumber": 10,
    "dayName": "Day of Nahr",
    "description": "It is the day of ‘Eed Al-Adha, the 10th day of Zul-Hijjah. It was called as such because livestock animals are slaughtered on this day as an act of worship to Allaah alone.",
    "iconName": "nahr"
  },
  {
    "dayNumber": 11,
    "dayName": "The First day of Tashreeq",
    "description": "It is the day of ‘Eed Al-Adha, the 10th day of Zul-Hijjah. It was called as such because livestock animals are slaughtered on this day as an act of worship to Allaah alone.",
    "iconName": "mina"
  },
  {
    "dayNumber": 12,
    "dayName": "The Second day of Tashreeq",
    "description": "It is the day of ‘Eed Al-Adha, the 10th day of Zul-Hijjah. It was called as such because livestock animals are slaughtered on this day as an act of worship to Allaah alone.",
    "iconName": "mina"
  },
  {
    "dayNumber": 13,
    "dayName": "The Third day of Tashreeq",
    "description": "It is the day of ‘Eed Al-Adha, the 10th day of Zul-Hijjah. It was called as such because livestock animals are slaughtered on this day as an act of worship to Allaah alone.",
    "iconName": "mina"
  }
]
