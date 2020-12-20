import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterMoneyComponent } from './enter-money.component';

describe('EnterMoneyComponent', () => {
  let component: EnterMoneyComponent;
  let fixture: ComponentFixture<EnterMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterMoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
