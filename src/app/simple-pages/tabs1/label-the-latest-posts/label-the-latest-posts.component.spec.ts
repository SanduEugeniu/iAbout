import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelTheLatestPostsComponent } from './label-the-latest-posts.component';

describe('LabelTheLatestPostsComponent', () => {
  let component: LabelTheLatestPostsComponent;
  let fixture: ComponentFixture<LabelTheLatestPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelTheLatestPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelTheLatestPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
