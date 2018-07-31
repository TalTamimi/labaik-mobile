import { Component, AfterViewInit, Input, OnInit } from '@angular/core';

const colors = ['#4B409A', '#4456a6', '#3a69b2', '#297bbf', '#1698d5', '#00afe5', '#19b1c9', '#32b4a8', '#47b686', '#55b868', '#60bb49'];

/**
 * Generated class for the AvatarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'avatar',
  templateUrl: 'avatar.html'
})
export class AvatarComponent implements OnInit, AfterViewInit {

  imageURL = '';
  index = 1;
  size = '';
  public backgroundColor = '#241d57';

  constructor() {

  }

  ngOnInit() {
    // console.log(this.counter);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.backgroundColor = this.background;
    }, 0);
  }

  public get background(): string {
    const color = colors[Math.floor(Math.random() * (colors.length ))];
    return color;
  }

}
