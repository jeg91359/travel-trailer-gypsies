import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { BlogpostsComponent } from "./blogposts/blogposts.component";
import { BlogpostSwtdComponent } from "./blogpost-swtd/blogpost-swtd.component";
import { BlogpostRweaComponent } from "./blogpost-rwea/blogpost-rwea.component";
import { BlogpostHiwrComponent } from "./blogpost-hiwr/blogpost-hiwr.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "landing", component: LandingComponent },
  { path: "blogposts", component: BlogpostsComponent },
  { path: "blogpost-swtd", component: BlogpostSwtdComponent },
  { path: "blogpost-rwea", component: BlogpostRweaComponent },
  { path: "blogpost-hiwr", component: BlogpostHiwrComponent }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {}
