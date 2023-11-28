// faq.service.ts

import { Injectable } from '@angular/core';
import { FaqItem } from './../models/faq.model';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  private faqList: FaqItem[] = [
    { pregunta: '¿Cuáles son los requisitos de admisión para la universidad?', respuesta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.' },
    { pregunta: '¿Cuánto cuesta la matrícula y cuáles son las opciones de ayuda financiera?', respuesta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.' },
    { pregunta: '¿Cómo se garantiza la seguridad de los estudiantes en el campus?', respuesta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.' },
    { pregunta: '¿Qué programas académicos y carreras ofrece la universidad?', respuesta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.' },
    { pregunta: '¿Cómo funciona el sistema de asesoramiento académico?', respuesta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.' },
    { pregunta: '¿Qué oportunidades de empleo y prácticas profesionales existen para los estudiantes?', respuesta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.' },
  ];

  getFaqs(): FaqItem[] {
    return this.faqList;
  }
}
