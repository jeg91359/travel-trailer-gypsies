import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-blogpost-hiwr',
  templateUrl: './blogpost-hiwr.component.html',
  styleUrls: ['./blogpost-hiwr.component.scss']
})
export class BlogpostHiwrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('blog-post-hiwr');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');

  }
  ngOnDestroy(){
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('blog-post-hiwr');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
  }

}