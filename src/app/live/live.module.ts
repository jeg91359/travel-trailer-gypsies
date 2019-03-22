import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { LiveComponent } from './live.component';
import { RouterModule } from '@angular/router';
import { BlogpostsComponent } from './blogposts/blogposts.component';
import { BlogpostSwtdComponent } from './blogpost-swtd/blogpost-swtd.component';
import { BlogpostRweaComponent } from './blogpost-rwea/blogpost-rwea.component';

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
        BlogpostsComponent,
        BlogpostSwtdComponent,
        BlogpostRweaComponent,
        LoginComponent]
})
export class LiveModule { }
