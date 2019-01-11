import { Component, OnInit } from '@angular/core';
import { PERSONS } from '../../../persons-list';

@Component({
  selector: 'app-profile-landing',
  templateUrl: './profile-landing.component.html',
  styleUrls: ['./profile-landing.component.scss']
})
export class ProfileLandingComponent implements OnInit {

  persons = PERSONS;

  constructor() { }

  ngOnInit() {
  }

}
