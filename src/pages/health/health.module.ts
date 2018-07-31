import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HealthPage } from './health';

@NgModule({
  declarations: [
    HealthPage,
  ],
  imports: [
    IonicPageModule.forChild(HealthPage),
    TranslateModule.forChild()
  ],
})
export class HealthPageModule {}
