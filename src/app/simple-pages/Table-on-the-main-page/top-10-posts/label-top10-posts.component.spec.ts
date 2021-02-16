import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelTop10PostsComponent } from './label-top10-posts.component';

describe('LabelTop10PostsComponent', () => {
  let component: LabelTop10PostsComponent;
  let fixture: ComponentFixture<LabelTop10PostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelTop10PostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelTop10PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
