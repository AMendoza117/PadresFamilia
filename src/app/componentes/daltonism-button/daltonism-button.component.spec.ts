import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaltonismButtonComponent } from './daltonism-button.component';

describe('DaltonismButtonComponent', () => {
  let component: DaltonismButtonComponent;
  let fixture: ComponentFixture<DaltonismButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaltonismButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaltonismButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
