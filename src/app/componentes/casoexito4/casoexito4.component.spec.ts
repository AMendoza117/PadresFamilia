import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Casoexito4Component } from './casoexito4.component';

describe('Casoexito4Component', () => {
  let component: Casoexito4Component;
  let fixture: ComponentFixture<Casoexito4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Casoexito4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Casoexito4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
