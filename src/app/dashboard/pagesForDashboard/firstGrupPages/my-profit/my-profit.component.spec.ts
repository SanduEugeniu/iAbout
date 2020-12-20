import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfitComponent } from './my-profit.component';

describe('MyProfitComponent', () => {
  let component: MyProfitComponent;
  let fixture: ComponentFixture<MyProfitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
