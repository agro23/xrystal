import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTopComponent } from './store-top.component';

describe('StoreTopComponent', () => {
  let component: StoreTopComponent;
  let fixture: ComponentFixture<StoreTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
