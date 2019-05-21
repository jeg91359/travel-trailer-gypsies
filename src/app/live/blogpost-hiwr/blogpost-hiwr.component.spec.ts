import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostHiwrComponent } from './blogpost-hiwr.component';

describe('BlogpostHiwrComponent', () => {
  let component: BlogpostHiwrComponent;
  let fixture: ComponentFixture<BlogpostHiwrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogpostHiwrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostHiwrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
