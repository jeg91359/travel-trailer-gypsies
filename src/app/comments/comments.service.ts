import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Comment } from "../comment.model";
import { CommentData } from "./comment-data.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CommentsService {
  private comments: Comment[] = [];
  private commentsUpdated = new Subject<Comment[]>();
  
  constructor(private http: HttpClient) {}

  getComments() {
    this.http
      .get<{ message: string; comments: any }>(
        "http://localhost:3000/comment-list"
      )
      .pipe(
        map(commentData => {
          return commentData.comments.map(comment => {
            return {
              id: comment._id,
              title: comment.title,
              content: comment.content,
              creator: comment.creator
            };
          });
        })
      )
      .subscribe(transformedComments => {
        console.log(transformedComments);
        this.comments = transformedComments;
        this.commentsUpdated.next(this.comments);
      });
  }

  getCommentUpdateListener() {
    return this.commentsUpdated.asObservable();
  }

  getComment(id: string) {
    return this.http.get<{_id: string, title: string, content: string, creator: string}>("http://localhost:3000/comment-list/" + id);
  }

  addComment(title: string, content: string) {
    const commentData: CommentData = { title: title, content: content };
    this.http
      .post("http://localhost:3000/comment-create", commentData)
      .subscribe(response => {
        console.log(response);
        // This line refreshes the comment-list after adding a new comment
        this.getComments();
      });
  }

  updateComment(id: string, title: string, content: string) {
    const comment: Comment = { id: id, title: title, content: content, creator: null};
    this.http.put("http://localhost:3000/comment-edit/" + id, comment)
    .subscribe(response => {
      const updatedComments = [...this.comments];
      const oldCommentIndex = updatedComments.findIndex(c => c.id === comment.id);
      updatedComments[oldCommentIndex] = comment;
      this.comments = updatedComments;
      this.commentsUpdated.next([...this.comments]);
    });
  }

  deleteComment(commentId: string) {
    this.http
      .delete("http://localhost:3000/comment-list/" + commentId)
      .subscribe(() => {
        // These lines of code filter out the deleted comment and just show the ones that are left
        const updatedComments = this.comments.filter(
          comment => comment.id !== commentId
        );
        this.comments = updatedComments;
        this.commentsUpdated.next(this.comments);
      });
  }
}
