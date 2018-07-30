import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HajjGuidePage } from './hajj-guide';

@NgModule({
  declarations: [
    HajjGuidePage,
  ],
  imports: [
    IonicPageModule.forChild(HajjGuidePage),
  ],
})
export class HajjGuidePageModule {}
