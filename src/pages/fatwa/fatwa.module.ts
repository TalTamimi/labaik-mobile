import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FatwaPage } from './fatwa';

@NgModule({
  declarations: [
    FatwaPage,
  ],
  imports: [
    IonicPageModule.forChild(FatwaPage),
  ],
})
export class FatwaPageModule {}
