import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowDoWeWinTogetherComponent } from './how-do-we-win-together.component';

describe('HowDoWeWinTogetherComponent', () => {
  let component: HowDoWeWinTogetherComponent;
  let fixture: ComponentFixture<HowDoWeWinTogetherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowDoWeWinTogetherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowDoWeWinTogetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
