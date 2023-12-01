import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Casoexito3Component } from './casoexito3.component';

describe('Casoexito3Component', () => {
  let component: Casoexito3Component;
  let fixture: ComponentFixture<Casoexito3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Casoexito3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Casoexito3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
