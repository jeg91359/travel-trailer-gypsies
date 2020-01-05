import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from '../auth.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  focus;
  focus1;
  focus2;
  message: string = "";
  data: Date = new Date();

  constructor(public authService: AuthService) {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("signup-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.add("navbar-absolute");
    navbar.classList.remove("fixed-top");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("signup-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.remove("navbar-absolute");
    navbar.classList.add("fixed-top");
  }

  onRegister(form: NgForm) {
    if (form.invalid) {
      console.log(form.value);
    } else {
      if (form.value.password1 != form.value.password2) {
        console.log("Passwords must match!");
        this.message = "Passwords must match!";
      } else {
        this.authService.createUser(
          form.value.username,
          form.value.password1
        );
      }
    }
  }
}
