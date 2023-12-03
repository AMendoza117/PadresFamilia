import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DaltonismService {
  public daltonism = false;

  toggleDaltonism(): void {
    this.daltonism = !this.daltonism;
    this.updateDaltonism();
  }

  private updateDaltonism(): void {
    if (this.daltonism) {
      document.body.classList.add('daltonism');
    } else {
      document.body.classList.remove('daltonism');
    }
  }

  get isDaltonism(): boolean {
    return this.daltonism;
  }
}
