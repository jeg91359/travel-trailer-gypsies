import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostSwtdComponent } from './blogpost-swtd.component';

describe('BlogpostSwtdComponent', () => {
  let component: BlogpostSwtdComponent;
  let fixture: ComponentFixture<BlogpostSwtdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogpostSwtdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostSwtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
