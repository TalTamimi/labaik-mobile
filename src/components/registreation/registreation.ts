import { LandingService } from './../../pages/landing/landing.service';
import {Component, Input, NgZone} from '@angular/core';
import {Storage} from "@ionic/storage";

/**
 * Generated class for the RegistreationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'registreation',
  templateUrl: 'registreation.html'
})
export class RegistreationComponent {

  hajjNumber = '';
  @Input() hide = false;
  @Input() show = false;

  constructor(
    public landingService: LandingService,
    private storage: Storage,
    private zone: NgZone
  ) {
  }

  ngOnInit() {
    this.landingService.navigation.next('registration');
    this.landingService.hajjNumberSubject.subscribe(res => {
      this.zone.run(() => {
        this.hajjNumber = res.toString();
      });
    })
  }

  goToNextComponent() {
    if (this.hajjNumber !== '') {
      this.storage.set('hajjNumber',this.hajjNumber);
      this.landingService.navigation.next('hajj-information');
    }
  }

}
