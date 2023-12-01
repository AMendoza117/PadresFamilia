import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCorreoComponent } from './modal-correo.component';

describe('ModalCorreoComponent', () => {
  let component: ModalCorreoComponent;
  let fixture: ComponentFixture<ModalCorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
