import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.scss']
})
export class CommentCreateComponent implements OnInit {
  newComment = '';

  constructor() { }

  ngOnInit() {
  }

  onAddComment() {
    this.newComment = 'The user\'s comment';
  }

}
