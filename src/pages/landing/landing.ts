import { LandingService } from './landing.service';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage implements OnInit {

  currentNav = 'language-selection';
  viewLanguageComponent = true;
  viewRegistrationComponent = false;
  viewHajjInformation = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public landingService: LandingService
  ) {
  }

  ngOnInit(){
    this.landingService.navigation.subscribe(
      (componentName: string) => {
        this.currentNav = componentName;
        this.hideComponent(this.currentNav);
      }
    );
  }

  hideComponent(name: string) {
    setTimeout(() => {
      switch (name) {
        case 'language-selection':
          this.viewLanguageComponent = true;
          this.viewRegistrationComponent = false;
          this.viewHajjInformation = false;
          break;

        case 'registration':
        this.viewRegistrationComponent = true;
        this.viewLanguageComponent = false;
        this.viewHajjInformation = false;
          break;

        default:
        this.viewHajjInformation = true;
        this.viewLanguageComponent = false;
        this.viewRegistrationComponent = false;
          break;
      }
    }, 700);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

}
