import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCampaignPage } from './my-campaign';

@NgModule({
  declarations: [
    MyCampaignPage,
  ],
  imports: [
    IonicPageModule.forChild(MyCampaignPage),
  ],
})
export class MyCampaignPageModule {}
