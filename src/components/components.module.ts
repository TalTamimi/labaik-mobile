import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppHeaderComponent } from './app-header/app-header';
import { HajjTimelineComponent } from './hajj-timeline/hajj-timeline';
import { CommunicationChannelsComponent } from './communication-channels/communication-channels';
import { LogoComponent } from './logo/logo';
import { ProfileComponent } from './profile/profile';
import { ChannelIconComponent } from './channel-icon/channel-icon';
import { BrowserModule } from '@angular/platform-browser';
import { AvatarComponent } from './avatar/avatar';
import { LandingBackgroundComponent } from './landing-background/landing-background';
import { LanguageSelectionComponent } from './language-selection/language-selection';
import { ScanBarcodeComponent } from './scan-barcode/scan-barcode';
import { ConfirmRegistrationComponent } from './confirm-registration/confirm-registration';
import { RegistreationComponent } from './registreation/registreation';
import { HajjInformationComponent } from './hajj-information/hajj-information';

@NgModule({
	declarations: [AppHeaderComponent,
    HajjTimelineComponent,
    CommunicationChannelsComponent,
    LogoComponent,
    ProfileComponent,
    AvatarComponent,
    ChannelIconComponent,
    LandingBackgroundComponent,
    AvatarComponent,
    LandingBackgroundComponent,
    LanguageSelectionComponent,
    ScanBarcodeComponent,
    RegistreationComponent,
    ConfirmRegistrationComponent,
    RegistreationComponent,
    HajjInformationComponent],
	imports: [BrowserModule, TranslateModule.forChild(), FormsModule],
	exports: [AppHeaderComponent,
    HajjTimelineComponent,
    CommunicationChannelsComponent,
    LogoComponent,
    ProfileComponent,
    ChannelIconComponent,
    AvatarComponent,
    LandingBackgroundComponent,
    LanguageSelectionComponent,
    ScanBarcodeComponent,
    ConfirmRegistrationComponent,
    RegistreationComponent,
    HajjInformationComponent]
})
export class ComponentsModule {}
