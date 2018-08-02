import { LandingService } from './../../pages/landing/landing.service';
import { Component, Input, OnInit } from '@angular/core';
import {RegistrationProvider} from "../../providers/registration/registration";
import {FCM} from "@ionic-native/fcm";
import { Storage } from '@ionic/storage';

/**
 * Generated class for the HajjInformationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hajj-information',
  templateUrl: 'hajj-information.html'
})
export class HajjInformationComponent implements OnInit {

  lang: any;
  text: string;
  @Input() hide = false;
  @Input() show = false;
  hajjData: any;
  deviceTokenId = '';
  hajjNumber = '';
  constructor(
    public landingService: LandingService,
    private fcm:FCM,
    private registrationService:RegistrationProvider,
    private storage: Storage
  ) {
    console.log('Hello HajjInformationComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit() {
    this.storage.get('hajjNumber').then((hajjNumber) => {
      this.hajjNumber = hajjNumber;
      this.registrationService.getHajjData(hajjNumber).subscribe(res => {
        this.hajjData =res;
      })
    });

    this.fcm.getToken().then(token=>{
      this.deviceTokenId = token;
    });

    this.storage.get('lang').then((lang) => {
      this.lang = lang;
    });
    this.landingService.navigation.next('hajj-information');
  }

  registerHajj() {
    this.hajjData.deviceTokenId = this.deviceTokenId;
    this.hajjData.language = this.lang;
    this.registrationService.RegisterHajj(this.hajjData,this.hajjNumber).subscribe(res => {
    })
  }
}
