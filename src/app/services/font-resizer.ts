// FontSizeService.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FontResizerService {
  private isLargeFont: boolean = false;

  constructor() {}

  toggleFontSize(): void {
    this.isLargeFont = !this.isLargeFont;
    // Lógica para cambiar el tamaño de la fuente según el valor de this.isLargeFont
    // Puedes aplicar estilos, cambiar clases, etc.
  }
}
