import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonDudasComponent } from './boton-dudas.component';

describe('BotonDudasComponent', () => {
  let component: BotonDudasComponent;
  let fixture: ComponentFixture<BotonDudasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonDudasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonDudasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
