import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrastButtonComponent } from './contrast-button.component';

describe('ContrastButtonComponent', () => {
  let component: ContrastButtonComponent;
  let fixture: ComponentFixture<ContrastButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContrastButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContrastButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
