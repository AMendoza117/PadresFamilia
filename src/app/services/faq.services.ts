// faq.service.ts

import { Injectable } from '@angular/core';
import { FaqItem } from './../models/faq.model';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  private faqList: FaqItem[] = [
    { pregunta: '¿Pregunta 1?', respuesta: 'Respuesta a la pregunta 1.' },
    { pregunta: '¿Pregunta 2?', respuesta: 'Respuesta a la pregunta 2.' },
    // Agrega más preguntas y respuestas según sea necesario
  ];

  getFaqs(): FaqItem[] {
    return this.faqList;
  }
}
