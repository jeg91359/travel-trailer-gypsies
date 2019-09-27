import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { NgForm } from "@angular/forms";
import { UsersService } from "../users.service";
import { User } from "../user.model";

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
  users: User[] = [];
  private usersSub: Subscription;

  constructor(public usersService: UsersService) {
    // initialize variable value
    this.show = false;
    this.usersService = usersService;
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("login-page");

    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.add("navbar-transparent");

    this.usersService.getUsers();
    this.usersSub = this.usersService
      .getUserUpdateListener()
      .subscribe((users: User[]) => {
        this.users = users;
        console.log("My array = ", this.users);
      });
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("login-page");

    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.remove("navbar-transparent");

    this.usersSub.unsubscribe();
  }
  onLogin(form: NgForm) {
    console.log(form.value);
  }

  // click event function toggle
  password() {
    this.show = !this.show;
  }
}
