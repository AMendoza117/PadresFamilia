import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Casoexito1Component } from './casoexito1.component';

describe('Casoexito1Component', () => {
  let component: Casoexito1Component;
  let fixture: ComponentFixture<Casoexito1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Casoexito1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Casoexito1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
