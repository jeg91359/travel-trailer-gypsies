import { Component, OnInit, OnDestroy, SimpleChanges } from "@angular/core";
import { AuthService } from "app/auth/auth.service";
import { Subscription } from "rxjs";

import * as Rellax from "rellax";

@Component({
  selector: "app-blogpost-hiwr",
  templateUrl: "./blogpost-hiwr.component.html",
  styleUrls: ["./blogpost-hiwr.component.scss"]
})
export class BlogpostHiwrComponent implements OnInit, OnDestroy {
  private authStatusSubs: Subscription;
  userIsAuthenticated = false;

  constructor(private authSerice: AuthService) {}

  ngOnInit() {
    var rellaxHeader = new Rellax(".rellax-header");
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("blog-post-hiwr");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.add("navbar-transparent");
    this.userIsAuthenticated = this.authSerice.getIsAuth();
    this.authStatusSubs = this.authSerice
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        console.log(isAuthenticated);
      });
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("blog-post-hiwr");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.remove("navbar-transparent");
    this.authStatusSubs.unsubscribe();
  }
}
