import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfileComponent {

  // @Input() username: string = 'Muhammed';
  // @Input() avatarImg = '';

  counter:number = 0;

  constructor(translate: TranslateService) {
    // translate.setDefaultLang('en');
  }

}
