import { Component, OnInit, OnDestroy } from "@angular/core";
import { Comment } from "../../comment.model";
import { CommentsService } from "../comments.service";
import { AuthService } from "app/auth/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-comment-list",
  templateUrl: "./comment-list.component.html",
  styleUrls: ["./comment-list.component.scss"]
})
export class CommentListComponent implements OnInit, OnDestroy {
  comments: Comment[] = [];
  private commentsSub: Subscription;
  showEdit: boolean = false;
  commentId: string;
  private authStatusSubs: Subscription;
  userIsAuthenticated = false;

  constructor(
    public commentsService: CommentsService,
    private authSerice: AuthService
  ) {}

  ngOnInit() {
    this.commentsService.getComments();
    this.commentsSub = this.commentsService
      .getCommentUpdateListener()
      .subscribe((comments: Comment[]) => {
        this.comments = comments;
      });
    this.userIsAuthenticated = this.authSerice.getIsAuth();
    this.authStatusSubs = this.authSerice
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  onEdit(commentId: string) {
    this.showEdit = !this.showEdit;
    this.commentId = commentId;
  }

  onCloseEdit() {
    this.showEdit = !this.showEdit;
  }

  onDelete(commentId: string) {
    this.commentsService.deleteComment(commentId);
  }

  ngOnDestroy() {
    this.commentsSub.unsubscribe();
    this.authStatusSubs.unsubscribe();
  }
}
