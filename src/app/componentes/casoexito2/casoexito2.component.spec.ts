import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Casoexito2Component } from './casoexito2.component';

describe('Casoexito2Component', () => {
  let component: Casoexito2Component;
  let fixture: ComponentFixture<Casoexito2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Casoexito2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Casoexito2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
