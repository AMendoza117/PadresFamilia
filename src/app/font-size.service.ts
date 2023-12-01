import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FontSizeService {
  public fontSize: number = 16;

  increaseFontSize(): void {
    this.fontSize += 2;
    this.updateFontSize();
  }

  decreaseFontSize(): void {
    this.fontSize -= 2;
    this.updateFontSize();
  }

   updateFontSize(): void {
    document.body.style.fontSize = `${this.fontSize}px`;
  }
}
