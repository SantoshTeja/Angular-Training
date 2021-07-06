import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactForms1Component } from './react-forms1.component';

describe('ReactForms1Component', () => {
  let component: ReactForms1Component;
  let fixture: ComponentFixture<ReactForms1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactForms1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactForms1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
