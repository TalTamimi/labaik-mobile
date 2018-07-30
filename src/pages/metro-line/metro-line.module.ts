import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MetroLinePage } from './metro-line';

@NgModule({
  declarations: [
    MetroLinePage,
  ],
  imports: [
    IonicPageModule.forChild(MetroLinePage),
  ],
})
export class MetroLinePageModule {}
