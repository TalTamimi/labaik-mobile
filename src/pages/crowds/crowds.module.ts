import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrowdsPage } from './crowds';

@NgModule({
  declarations: [
    CrowdsPage,
  ],
  imports: [
    IonicPageModule.forChild(CrowdsPage),
  ],
})
export class CrowdsPageModule {}
