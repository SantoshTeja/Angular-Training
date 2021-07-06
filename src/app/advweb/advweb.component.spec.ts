import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvwebComponent } from './advweb.component';

describe('AdvwebComponent', () => {
  let component: AdvwebComponent;
  let fixture: ComponentFixture<AdvwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvwebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
