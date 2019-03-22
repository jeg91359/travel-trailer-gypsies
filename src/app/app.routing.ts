import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './live/landing/landing.component';
import { BlogpostsComponent } from './live/blogposts/blogposts.component';
import { BlogpostSwtdComponent } from './live/blogpost-swtd/blogpost-swtd.component';
import { BlogpostRweaComponent } from './live/blogpost-rwea/blogpost-rwea.component';


const routes: Routes =[
    { path: '', redirectTo: 'live/landing', pathMatch: 'full' },
    { path: 'live/landing',     component: LandingComponent },
    { path: 'live/blogposts',       component: BlogpostsComponent },
    { path: 'live/blogpost-swtd',     component: BlogpostSwtdComponent },
    { path: 'live/blogpost-rwea',     component: BlogpostRweaComponent }
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
