import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INeedAdvertisingComponent } from './i-need-advertising.component';

describe('INeedAdvertisingComponent', () => {
  let component: INeedAdvertisingComponent;
  let fixture: ComponentFixture<INeedAdvertisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ INeedAdvertisingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(INeedAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
