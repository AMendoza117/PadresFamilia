// font-size-button.component.ts
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-font-resizer',
  template: '<button (click)="toggleFontSize()">Toggle Font Size</button>',
  styleUrls: ['./font-resizer.component.css']
})
export class FontSizeButtonComponent {
  @HostBinding('style.font-size') fontSize: string = '1em';

  isLargeFont: boolean = false;

  toggleFontSize(): void {
    this.isLargeFont = !this.isLargeFont;
    this.fontSize = this.isLargeFont ? '1.2em' : '1em';
  }
}
