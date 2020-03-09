import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-avatar-create",
  templateUrl: "./avatar-create.component.html",
  styleUrls: ["./avatar-create.component.scss"]
})
export class AvatarCreateComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onSave() {
    console.log("Image saved!");
    this.router.navigate(["login"]);
    //this.authService.createUser(form.value.username, form.value.password1);
  }
}
