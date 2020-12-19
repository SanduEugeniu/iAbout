import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelHelpComponent } from './label-help.component';

describe('LabelHelpComponent', () => {
  let component: LabelHelpComponent;
  let fixture: ComponentFixture<LabelHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
