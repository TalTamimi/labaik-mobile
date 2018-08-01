import { LandingService } from './../../pages/landing/landing.service';
import { Component, OnInit, Input } from '@angular/core';

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
    public landingService: LandingService
  ) {
  }

  ngOnInit() {
    this.landingService.navigation.next('language-selection');
  }

  changeLanguage(event){
    console.log(event.path[0].innerHTML);
    this.landingService.navigation.next('registration');
  }

}
