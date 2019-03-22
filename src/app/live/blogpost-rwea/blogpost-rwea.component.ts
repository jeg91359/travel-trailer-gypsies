import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-blogpost-rwea',
  templateUrl: './blogpost-rwea.component.html',
  styleUrls: ['./blogpost-rwea.component.scss']
})
export class BlogpostRweaComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('blog-post-rwea');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');

  }
  ngOnDestroy(){
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('blog-post-rwea');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
  }

}
