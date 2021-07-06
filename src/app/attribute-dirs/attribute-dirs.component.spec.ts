import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirsComponent } from './attribute-dirs.component';

describe('AttributeDirsComponent', () => {
  let component: AttributeDirsComponent;
  let fixture: ComponentFixture<AttributeDirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeDirsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeDirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
