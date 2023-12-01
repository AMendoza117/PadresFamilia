import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitosComponent } from './exitos.component';

describe('ExitosComponent', () => {
  let component: ExitosComponent;
  let fixture: ComponentFixture<ExitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
