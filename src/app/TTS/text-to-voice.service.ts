// text-to-voice.service.ts
/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextToVoiceService {
  private synthesis: SpeechSynthesis;
  private utterance: SpeechSynthesisUtterance;
  private speaking: boolean;

  constructor() {
    this.synthesis = window.speechSynthesis;
    this.utterance = new SpeechSynthesisUtterance();
    this.speaking = false;
  }

  speak(text: string): void {
    this.utterance.text = text;
    this.synthesis.speak(this.utterance);
    this.speaking = true;
  }

  stop(): void {
    this.synthesis.cancel();
    this.speaking = false;
  }

  isSpeaking(): boolean {
    return this.speaking;
  }
}
*/

// text-to-voice.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextToVoiceService {
  private synthesis: SpeechSynthesis;
  private utterance: SpeechSynthesisUtterance;
  private isEnabledFlag: boolean;

  constructor() {
    this.synthesis = window.speechSynthesis;
    this.utterance = new SpeechSynthesisUtterance();
    this.isEnabledFlag = false;
  }

  speak(text: string): void {
    if (this.isEnabledFlag) {
      this.utterance.text = text;
      this.synthesis.speak(this.utterance);
    }
  }

  stop(): void {
    this.synthesis.cancel();
  }

  toggleEnabled(): void {
    this.isEnabledFlag = !this.isEnabledFlag;
    if (!this.isEnabledFlag) {
      this.stop();
    }
  }

  isEnabled(): boolean {
    return this.isEnabledFlag;
  }
}
