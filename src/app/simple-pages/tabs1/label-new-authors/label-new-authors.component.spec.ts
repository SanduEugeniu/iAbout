import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelNewAuthorsComponent } from './label-new-authors.component';

describe('LabelNewAuthorsComponent', () => {
  let component: LabelNewAuthorsComponent;
  let fixture: ComponentFixture<LabelNewAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelNewAuthorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelNewAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
