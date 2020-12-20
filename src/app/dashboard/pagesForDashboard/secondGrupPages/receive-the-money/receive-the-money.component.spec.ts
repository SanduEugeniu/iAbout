import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveTheMoneyComponent } from './receive-the-money.component';

describe('ReceiveTheMoneyComponent', () => {
  let component: ReceiveTheMoneyComponent;
  let fixture: ComponentFixture<ReceiveTheMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveTheMoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveTheMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
