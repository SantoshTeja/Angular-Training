import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorewebComponent } from './coreweb.component';

describe('CorewebComponent', () => {
  let component: CorewebComponent;
  let fixture: ComponentFixture<CorewebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorewebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorewebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
