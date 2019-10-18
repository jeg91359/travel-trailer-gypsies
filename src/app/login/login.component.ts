import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, OnDestroy {
  data: Date = new Date();
  focus;
  focus1;
  message: string = "";
  show: boolean;
  isLoading = false;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("login-page");

    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.add("navbar-transparent");
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("login-page");

    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.remove("navbar-transparent");
  }

  onLogin(form: NgForm) {
    if (form.invalid){
      return;
    }
    this.authService.login(form.value.email, form.value.password);
  }

  // click event function toggle
  password() {
    this.show = !this.show;
  }
}
