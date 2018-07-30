import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './app-header/app-header';
import { HajjTimelineComponent } from './hajj-timeline/hajj-timeline';
import { CommunicationChannelsComponent } from './communication-channels/communication-channels';
import { LogoComponent } from './logo/logo';
import { ProfileComponent } from './profile/profile';
import { ChannelIconComponent } from './channel-icon/channel-icon';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
	declarations: [AppHeaderComponent,
    HajjTimelineComponent,
    CommunicationChannelsComponent,
    LogoComponent,
    ProfileComponent,
    ChannelIconComponent],
	imports: [BrowserModule],
	exports: [AppHeaderComponent,
    HajjTimelineComponent,
    CommunicationChannelsComponent,
    LogoComponent,
    ProfileComponent,
    ChannelIconComponent]
})
export class ComponentsModule {}
