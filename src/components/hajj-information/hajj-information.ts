import { LandingService } from './../../pages/landing/landing.service';
import { Component, Input, OnInit } from '@angular/core';

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

  text: string;
  @Input() hide = false;
  @Input() show = false;

  constructor(
    public landingService: LandingService
  ) {
    console.log('Hello HajjInformationComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit() {
    this.landingService.navigation.next('hajj-information');
  }

}
