import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { PresentationComponent } from './presentation/presentation.component';
import { ComponentsComponent } from './components/components.component';
import { SectionsComponent } from './sections/sections.component';
import { AboutusComponent } from './examples/aboutus/aboutus.component';
import { BlogpostComponent } from './examples/blogpost/blogpost.component';
// import { BlogpostsComponent } from './examples/blogposts/blogposts.component';
import { ContactusComponent } from './examples/contactus/contactus.component';
import { EcommerceComponent } from './examples/ecommerce/ecommerce.component';
import { LoginComponent } from './examples/login/login.component';
import { ProductpageComponent } from './examples/productpage/productpage.component';
import { RegisterComponent } from './examples/register/register.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { PricingComponent } from './examples/pricing/pricing.component';

import { LandingComponent } from './live/landing/landing.component';
import { ProfileLandingComponent } from './live/profile/profile-landing/profile-landing.component';
import { ProfileComponent } from './live/profile/profile/profile.component';
import { AdventureLandingComponent } from './live/adventure/adventure-landing/adventure-landing.component';
import { AdventureComponent } from './live/adventure/adventure/adventure.component';
import { BlogpostsComponent } from './live/blogposts/blogposts.component';

// const routes: Routes =[
//     { path: '', redirectTo: 'presentation', pathMatch: 'full' },
//     { path: 'presentation',         component: PresentationComponent },
//     { path: 'components',           component: ComponentsComponent },
//     { path: 'sections',             component: SectionsComponent },
//     { path: 'nucleoicons',          component: NucleoiconsComponent },
//     { path: 'examples/aboutus',     component: AboutusComponent },
//     { path: 'examples/blogpost',    component: BlogpostComponent },
//     { path: 'examples/blogposts',   component: BlogpostsComponent },
//     { path: 'examples/contactus',   component: ContactusComponent },
//     { path: 'examples/ecommerce',   component: EcommerceComponent },
//     { path: 'examples/landing',     component: LandingComponent },
//     { path: 'examples/login',       component: LoginComponent },
//     { path: 'examples/pricing',     component: PricingComponent },
//     { path: 'examples/productpage', component: ProductpageComponent },
//     { path: 'examples/profile',     component: ProfileComponent },
//     { path: 'examples/register',    component: RegisterComponent }
// ];

const routes: Routes =[
    { path: '', redirectTo: 'live/landing', pathMatch: 'full' },
    { path: 'index',            component: ComponentsComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'live/landing',     component: LandingComponent },
    { path: 'live/blogposts',       component: BlogpostsComponent }
    // { path: 'live/profile-landing',     component: ProfileLandingComponent },
    // { path: 'live/profile/:id',     component: ProfileComponent },
    // { path: 'live/adventure-landing', component: AdventureLandingComponent },
    // { path: 'live/adventure/:id',     component: AdventureComponent }
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
