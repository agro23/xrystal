import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XrystalComponent } from './xrystal.component';

describe('XrystalComponent', () => {
  let component: XrystalComponent;
  let fixture: ComponentFixture<XrystalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XrystalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XrystalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
