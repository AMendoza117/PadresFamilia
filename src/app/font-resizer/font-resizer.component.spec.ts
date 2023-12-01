import { TestBed } from '@angular/core/testing';
import { FontSizeService } from '../font-size.service';

describe('FontSizeService', () => {
  let service: FontSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FontSizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should increase font size', () => {
    const initialFontSize = service.fontSize;
    service.increaseFontSize();
    expect(service.fontSize).toBeGreaterThan(initialFontSize);
  });

  it('should decrease font size', () => {
    const initialFontSize = service.fontSize;
    service.decreaseFontSize();
    expect(service.fontSize).toBeLessThan(initialFontSize);
  });

  it('should update font size in the document body', () => {
    const spy = spyOn(document.body.style, 'setProperty');
    service.updateFontSize();
    expect(spy).toHaveBeenCalled();
  });
});