import { LandingService } from './../../pages/landing/landing.service';
import { Component, OnInit, Input } from '@angular/core';
import {Storage} from "@ionic/storage";

/**
 * Generated class for the LanguageSelectionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'language-selection',
  templateUrl: 'language-selection.html'
})
export class LanguageSelectionComponent implements OnInit {

  @Input() hide = false;
  @Input() show = false;
  constructor(
    public landingService: LandingService,
    private storage: Storage
  ) {
  }

  ngOnInit() {
    this.landingService.navigation.next('language-selection');
  }

  changeLanguage(event, lang: any){
    this.storage.set('lang',lang);
    this.landingService.navigation.next('registration');
  }

}
