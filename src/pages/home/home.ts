import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FCM} from "@ionic-native/fcm";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  channels: any;

  constructor(public navCtrl: NavController, private fcm:FCM) {
    fcm.onTokenRefresh().subscribe(token=>{
      // update device token id
      console.log(token);
    });
  }

  ngOnInit(): void {
    this.navCtrl.remove(0);
    this.navCtrl.remove(1);
    this.navCtrl.remove(2);
  }


}
