import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UsersService } from "../users.service";

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

  constructor(public usersService: UsersService) {}

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
      this.message = "Please enter a valid email address and password.";
    } else {
      this.usersService.addUser(
        form.value.id,
        form.value.firstName + " " + form.value.lastName,
        form.value.email,
        form.value.username,
        form.value.password1
      );
      console.log(
        form.value.id,
        form.value.firstName + " " + form.value.lastName,
        form.value.email,
        form.value.username,
        form.value.password1
      );
    }
  }
}
