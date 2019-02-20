import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { LiveComponent } from './live.component';
import { ProfileLandingComponent } from './profile/profile-landing/profile-landing.component';
import { RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AdventureLandingComponent } from './adventure/adventure-landing/adventure-landing.component';
import { AdventureComponent } from './adventure/adventure/adventure.component';
import { BlogpostsComponent } from './blogposts/blogposts.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        RouterModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        })
    ],
    declarations: [
        LiveComponent,
        LandingComponent,
        ProfileComponent,
        ProfileLandingComponent,
        PortfolioComponent,
        AdventureLandingComponent,
        AdventureComponent,
        BlogpostsComponent]
})
export class LiveModule { }
