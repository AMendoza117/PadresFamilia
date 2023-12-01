// mouse-listener.directive.ts
import { Directive, HostListener } from '@angular/core';
import { TextToVoiceService } from './text-to-voice.service';

@Directive({
  selector: '[appMouseListener]',
})
export class MouseListenerDirective {
  constructor(private textToVoiceService: TextToVoiceService) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    const text = (event.target as HTMLElement).innerText;
    this.textToVoiceService.speak(text);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.textToVoiceService.stop();
  }
}
