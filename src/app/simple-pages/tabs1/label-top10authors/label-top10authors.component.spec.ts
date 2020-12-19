import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelTop10authorsComponent } from './label-top10authors.component';

describe('LabelTop10authorsComponent', () => {
  let component: LabelTop10authorsComponent;
  let fixture: ComponentFixture<LabelTop10authorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelTop10authorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelTop10authorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
