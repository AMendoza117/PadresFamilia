import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasoexitoComponent } from './casoexito.component';

describe('CasoexitoComponent', () => {
  let component: CasoexitoComponent;
  let fixture: ComponentFixture<CasoexitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasoexitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasoexitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
