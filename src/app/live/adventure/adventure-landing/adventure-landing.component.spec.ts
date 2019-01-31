import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureLandingComponent } from './adventure-landing.component';

describe('AdventureLandingComponent', () => {
  let component: AdventureLandingComponent;
  let fixture: ComponentFixture<AdventureLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
