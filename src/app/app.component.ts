import { LandingPage } from './../pages/landing/landing';
import {Component, NgZone, OnInit} from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import {FCM} from "@ionic-native/fcm";

@Component({
  templateUrl: 'app.html'
})
export class MyApp{
  rootPage:any;
  title: any;
  body: any;
  showNotification = false;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage,
    translate: TranslateService, private fcm: FCM,   private zone: NgZone) {
    platform.ready().then(() => {
      translate.setDefaultLang('en');
      // translate.use('en');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      setTimeout(()=>{
        splashScreen.hide();
      }, 3000);

      storage.get('hajjNumberFinal').then((hajjNumber) => {
        if(hajjNumber) {
          this.rootPage =  HomePage;
        }else {
          this.rootPage =  LandingPage;
        }
      });

      //Notifications Setup
      fcm.subscribeToTopic('all');
      fcm.onNotification().subscribe(data=>{
        if(data.wasTapped){
          //console.log("Received in background");
        } else {
          this.showNotification = true;
          this.zone.run(() => {
            if(data.title) {
              this.title = data.title;
            }
            if(data.body){
              this.body = data.body;
            }
            setTimeout(()=>{
              this.showNotification = false;
            }, 3000);
          });
        }
      });

    });

    statusBar.styleDefault();


  }

}
