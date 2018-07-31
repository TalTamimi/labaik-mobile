import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { LandingPage } from '../pages/landing/landing';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import {IonicStorageModule} from "@ionic/storage";
import {LoginPage} from "../pages/login/login";
import {LanguageSelectionPage} from "../pages/language-selection/language-selection";
import {ConfirmRegistrationPage} from "../pages/confirm-registration/confirm-registration";

@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    HomePage,
    LoginPage,
    LanguageSelectionPage,
    ConfirmRegistrationPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    HomePage,
    LoginPage,
    LanguageSelectionPage,
    ConfirmRegistrationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
