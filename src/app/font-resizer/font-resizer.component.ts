import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { FontSizeService } from '../font-size.service';

@Component({
  selector: 'app-font-size-button',
  templateUrl: './font-resizer.component.html',
  styleUrls: ['./font-resizer.component.css']
})
export class FontSizeButtonComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    public fontSizeService: FontSizeService
  ) {}

  ngOnInit(): void {
    // Additional initialization logic if needed
  }

  increaseFontSize() {
    this.fontSizeService.increaseFontSize();
  }

  decreaseFontSize() {
    this.fontSizeService.decreaseFontSize();
  }
}
