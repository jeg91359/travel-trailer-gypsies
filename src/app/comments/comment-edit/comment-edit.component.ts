import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from "@angular/forms";
import { CommentsService } from '../comments.service';
import { CommentData } from "../comment-data.model";
import { Comment } from '../../comment.model';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.scss']
})
export class CommentEditComponent implements OnInit {
  
  @Input() showEditComponent: boolean;
  @Input() commentId: string;
  @Output() closeEditComponent = new EventEmitter<boolean>();

  comment: Comment;
  showEdit: boolean = false;

  constructor(public commentsService: CommentsService) { }

  ngOnInit() {
    if (this.commentId != '') {
      this.commentsService.getComment(this.commentId).subscribe(commentData => {
        this.comment = {id: commentData._id, title: commentData.title, content: commentData.content};
      });
    }
  }

  onUpdateComment(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.commentsService.updateComment(this.commentId, form.value.title, form.value.content);
    form.resetForm();
  }

  onClose() {
    this.closeEditComponent.emit();
  };

}
