import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfileComponent {

  @Input() username: string = 'Muhammed';
  @Input() avatarImg = '';

  constructor() {

  }

}
