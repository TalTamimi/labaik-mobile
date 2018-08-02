import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DependantsPage } from './dependants';

@NgModule({
  declarations: [
    DependantsPage,
  ],
  imports: [
    IonicPageModule.forChild(DependantsPage),
  ],
})
export class DependantsPageModule {}
