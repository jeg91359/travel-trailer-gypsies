import {
  Component,
  OnInit,
  ElementRef,
  OnDestroy,
  HostListener
} from "@angular/core";
import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from "@angular/common";
import { AuthService } from "app/auth/auth.service";
import { Subscription } from "rxjs";

@HostListener("window:scroll", ["$event"])
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, OnDestroy {
  private toggleButton: any;
  private sidebarVisible: boolean;
  private authListenerSubs: Subscription;
  userIsAuthenticated = false;
  public isMenuCollapsed = true;

  constructor(
    public location: Location,
    private element: ElementRef,
    private authSerice: AuthService
  ) {
    this.sidebarVisible = false;
  }

  ngOnInit() {
    this.userIsAuthenticated = this.authSerice.getIsAuth();
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
    this.authListenerSubs = this.authSerice
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName("html")[0];
    setTimeout(function() {
      toggleButton.classList.add("toggled");
    }, 500);
    html.classList.add("nav-open");
    this.sidebarVisible = true;
  }

  sidebarClose() {
    const html = document.getElementsByTagName("html")[0];
    //this.toggleButton.classList.remove("toggled");
    this.sidebarVisible = false;
    html.classList.remove("nav-open");
  }

  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }

  isDocumentation() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee === "/documentation") {
      return true;
    } else {
      return false;
    }
  }

  onLogout() {
    this.authSerice.logout();
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    //console.log("toggled");
    let element = document.querySelector(".navbar");
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add("navbar-inverse");
    } else {
      element.classList.remove("navbar-inverse");
    }
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
