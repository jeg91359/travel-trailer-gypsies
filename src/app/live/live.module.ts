import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { LiveComponent } from './live.component';
import { ProfileLandingComponent } from './profile/profile-landing/profile-landing.component';
import { RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        JWBootstrapSwitchModule,
        RouterModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        })
    ],
    declarations: [
        LandingComponent,
        LoginComponent,
        LiveComponent,
        LandingComponent,
        LoginComponent,
        ProfileComponent,
        ProfileLandingComponent,
        PortfolioComponent]
})
export class LiveModule { }