import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostRweaComponent } from './blogpost-rwea.component';

describe('BlogpostRweaComponent', () => {
  let component: BlogpostRweaComponent;
  let fixture: ComponentFixture<BlogpostRweaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogpostRweaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostRweaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
