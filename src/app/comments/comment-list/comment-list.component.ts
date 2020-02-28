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
  showEdit: boolean = false;
  commentId: string;
  userIsAuthenticated = false;
  userId: string;
  private commentsSub: Subscription;
  private authStatusSubs: Subscription;

  constructor(
    public commentsService: CommentsService,
    private authSerice: AuthService
  ) {}

  ngOnInit() {
    this.commentsService.getComments();
    this.userId = this.authSerice.getUserId();
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
        this.userId = this.authSerice.getUserId();
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
