import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatDoYouNeedToKnowAboutUsComponent } from './what-do-you-need-to-know-about-us.component';

describe('WhatDoYouNeedToKnowAboutUsComponent', () => {
  let component: WhatDoYouNeedToKnowAboutUsComponent;
  let fixture: ComponentFixture<WhatDoYouNeedToKnowAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatDoYouNeedToKnowAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatDoYouNeedToKnowAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
