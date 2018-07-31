import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";

/**
 * Generated class for the LanguageSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-language-selection',
  templateUrl: 'language-selection.html',
})
export class LanguageSelectionPage {

  langs: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanguageSelectionPage');
  }

  toLoginPage() {
    this.navCtrl.push(LoginPage);
  }
}
