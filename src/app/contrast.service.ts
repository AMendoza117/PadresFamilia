import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContrastService {
  public highContrast = false;

  toggleContrast(): void {
    this.highContrast = !this.highContrast;
    this.updateContrast();
  }

  private updateContrast(): void {
    if (this.highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }
}
