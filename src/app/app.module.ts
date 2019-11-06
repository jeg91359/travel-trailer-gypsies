import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // this is needed!
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { NouisliderModule } from "ng2-nouislider";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { AgmCoreModule } from "@agm/core";
import { LandingComponent } from "./landing/landing.component";
import { LoginComponent } from "./login/login.component";
import { BlogpostsComponent } from "./blogposts/blogposts.component";
import { BlogpostSwtdComponent } from "./blogposts/blogpost-swtd/blogpost-swtd.component";
import { BlogpostRweaComponent } from "./blogposts/blogpost-rwea/blogpost-rwea.component";
import { BlogpostHiwrComponent } from "./blogposts/blogpost-hiwr/blogpost-hiwr.component";
import { RegisterComponent } from "./register/register.component";
import { CommentCreateComponent } from './comments/comment-create/comment-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    BlogpostsComponent,
    BlogpostSwtdComponent,
    BlogpostRweaComponent,
    LoginComponent,
    BlogpostHiwrComponent,
    RegisterComponent,
    CommentCreateComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module,
    AgmCoreModule.forRoot({
      apiKey: "YOUR_KEY_HERE"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
