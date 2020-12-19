import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelTop10CategoriesComponent } from './label-top10-categories.component';

describe('LabelTop10CategoriesComponent', () => {
  let component: LabelTop10CategoriesComponent;
  let fixture: ComponentFixture<LabelTop10CategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelTop10CategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelTop10CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
