///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {FCM} from "@ionic-native/fcm";
import {RegistrationProvider} from "../../providers/registration/registration";

/**
 * Generated class for the ConfirmRegistrationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'confirm-registration',
  templateUrl: 'confirm-registration.html'
})
export class ConfirmRegistrationComponent implements OnInit{
  deviceTokenId: any = '88877888';
  hajjData: any = {};
  constructor(private fcm:FCM, private registrationService:RegistrationProvider) {
    // fcm.getToken().then(token=>{
    //   this.deviceTokenId = token;
    // })
  }

  registerHajj() {
    // this.hajjData.deviceTokenId = this.deviceTokenId;
    // this.registrationService.RegisterHajj(this.hajjData).subscribe(res => {
    //
    // })
  }

  ngOnInit(): void {
    this.registrationService.getHajjData('123467').subscribe(res => {
      console.log(res);
      this.hajjData =res;
    })
  }
}
