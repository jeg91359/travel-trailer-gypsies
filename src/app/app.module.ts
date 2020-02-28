import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // this is needed!
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { NouisliderModule } from "ng2-nouislider";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { AgmCoreModule } from "@agm/core";
import { LandingComponent } from "./landing/landing.component";
import { LoginComponent } from "./auth/login/login.component";
import { BlogpostsComponent } from "./blogposts/blogposts.component";
import { BlogpostSwtdComponent } from "./blogposts/blogpost-swtd/blogpost-swtd.component";
import { BlogpostRweaComponent } from "./blogposts/blogpost-rwea/blogpost-rwea.component";
import { BlogpostHiwrComponent } from "./blogposts/blogpost-hiwr/blogpost-hiwr.component";
import { RegisterComponent } from "./auth/register/register.component";
import { CommentCreateComponent } from "./comments/comment-create/comment-create.component";
import { CommentListComponent } from "./comments/comment-list/comment-list.component";
import { CommentEditComponent } from "./comments/comment-edit/comment-edit.component";
import { ImageUploadModule } from "./shared/image-upload/image-upload.module";
import { AuthInterceptor } from "./auth/auth-interceptor";
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { AvatarCreateComponent } from './avatars/avatar-create/avatar-create.component';


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
    CommentCreateComponent,
    CommentListComponent,
    CommentEditComponent,
    ErrorComponent,
    AvatarCreateComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module,
    ImageUploadModule,
    AgmCoreModule.forRoot({
      apiKey: "YOUR_KEY_HERE"
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule {}
