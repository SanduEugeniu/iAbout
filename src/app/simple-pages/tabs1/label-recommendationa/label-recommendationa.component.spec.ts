import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelRecommendationaComponent } from './label-recommendationa.component';

describe('LabelRecommendationaComponent', () => {
  let component: LabelRecommendationaComponent;
  let fixture: ComponentFixture<LabelRecommendationaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelRecommendationaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelRecommendationaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
