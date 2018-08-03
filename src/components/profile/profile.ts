import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Storage} from "@ionic/storage";

@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfileComponent {

  // @Input() username: string = 'Muhammed';
  // @Input() avatarImg = '';

  counter:number = 0;
  name: any = '';
  constructor(translate: TranslateService, private storage:Storage) {
    // translate.setDefaultLang('en');
    this.storage.get('name').then(name => {
      this.name = name;
    });
  }

}
