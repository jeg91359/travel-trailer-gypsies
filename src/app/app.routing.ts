import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { BlogpostsComponent } from "./blogposts/blogposts.component";
import { BlogpostSwtdComponent } from "./blogposts/blogpost-swtd/blogpost-swtd.component";
import { BlogpostRweaComponent } from "./blogposts/blogpost-rwea/blogpost-rwea.component";
import { BlogpostHiwrComponent } from "./blogposts/blogpost-hiwr/blogpost-hiwr.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { AvatarCreateComponent } from './avatars/avatar-create/avatar-create.component';

const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "landing", component: LandingComponent },
  { path: "blogposts", component: BlogpostsComponent },
  { path: "blogpost-swtd", component: BlogpostSwtdComponent },
  { path: "blogpost-rwea", component: BlogpostRweaComponent },
  { path: "blogpost-hiwr", component: BlogpostHiwrComponent },
  { path: "avatar-create", component: AvatarCreateComponent}
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {}
