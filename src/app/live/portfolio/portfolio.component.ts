import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PORTFOLIOS } from '../../portfolios-list';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolios = PORTFOLIOS;

  id: number;
  title: string;
  photo1: string;
  photo2: string;
  photo3: string;
  photo4: string;
  photo5: string;
  photo6: string;
  photo7: string;
  private sub: any;
  showPortfolio: boolean = false;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    for (var j = 0; j < this.portfolios.length; j++){
      if (this.id == this.portfolios[j].id){
        this.title = this.portfolios[j].title;
        this.photo1 = this.portfolios[j].photo1;
        this.photo2 = this.portfolios[j].photo2;
        this.photo3 = this.portfolios[j].photo3;
        this.photo4 = this.portfolios[j].photo4;
        this.photo5 = this.portfolios[j].photo5;
        this.photo6 = this.portfolios[j].photo6;
        this.photo7 = this.portfolios[j].photo7;
      } 

      if (this.id == 1){
        this.showPortfolio = true;
      }
    }
  }

  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('portfolio-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');

    this.sub.unsubscribe();
}
}

