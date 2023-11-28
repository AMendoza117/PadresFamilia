import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExperienciaUsuario';
  isTTSEnabled: boolean = false;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.isTTSEnabled) {
      this.readTextUnderCursor(event.clientX, event.clientY);
    }
  }

  readTextUnderCursor(x: number, y: number): void {
    const elementMouseIsOver = document.elementFromPoint(x, y);

    if (elementMouseIsOver && 'innerText' in elementMouseIsOver) {
      const textToRead = (elementMouseIsOver as HTMLElement).innerText;
      this.speak(textToRead);
    }
  }

  speak(text: string): void {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  }

  toggleTTS(): void {
    this.isTTSEnabled = !this.isTTSEnabled;
  }
}
