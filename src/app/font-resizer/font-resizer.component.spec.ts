import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizeButtonComponent } from './font-resizer.component';

describe('FontSizeButtonComponent', () => {
  let component: FontSizeButtonComponent;
  let fixture: ComponentFixture<FontSizeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontSizeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontSizeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
