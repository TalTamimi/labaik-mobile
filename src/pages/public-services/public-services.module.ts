import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicServicesPage } from './public-services';

@NgModule({
  declarations: [
    PublicServicesPage,
  ],
  imports: [
    IonicPageModule.forChild(PublicServicesPage),
  ],
})
export class PublicServicesPageModule {}
