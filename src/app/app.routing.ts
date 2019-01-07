import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './live/landing/landing.component';
import { LoginComponent } from './live/login/login.component';
import { ProfileLandingComponent } from './live/profile/profile-landing/profile-landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { Profile1Component } from './live/profile/profile1/profile1.component';

const routes: Routes =[
    { path: '', redirectTo: 'live/landing', pathMatch: 'full' },
    { path: 'index',            component: ComponentsComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'live/landing',     component: LandingComponent },
    { path: 'live/login',       component: LoginComponent },
    { path: 'live/profile-landing',     component: ProfileLandingComponent },
    { path: 'live/profile1',     component: Profile1Component }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
