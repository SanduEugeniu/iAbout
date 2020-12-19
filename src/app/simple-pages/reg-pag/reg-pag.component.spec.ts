import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPagComponent } from './reg-pag.component';

describe('RegPagComponent', () => {
  let component: RegPagComponent;
  let fixture: ComponentFixture<RegPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegPagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
