import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CommentsService } from "../comments.service";

@Component({
  selector: "app-comment-create",
  templateUrl: "./comment-create.component.html",
  styleUrls: ["./comment-create.component.scss"]
})
export class CommentCreateComponent implements OnInit {

  constructor(public commentsService: CommentsService) {}

  ngOnInit() {}

  onAddComment(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.commentsService.addComment(form.value.title, form.value.content);
    form.resetForm();
  }
}
