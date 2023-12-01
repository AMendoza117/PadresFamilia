// faq.service.ts

import { Injectable } from '@angular/core';
import { FaqItem } from './../models/faq.model';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  private faqList: FaqItem[] = [
    { pregunta: '¿Cuáles son los requisitos de admisión para la universidad?', respuesta: 'Los requisitos de admisión para la universidad varían según el programa y nivel de estudio. Puedes encontrar información detallada en la sección de admisiones de nuestro sitio web o comunicándote con la oficina de admisiones.' },
    { pregunta: '¿Cuánto cuesta la matrícula y cuáles son las opciones de ayuda financiera?', respuesta: 'El costo de la matrícula y las opciones de ayuda financiera dependen del programa y la situación económica de cada estudiante. Para obtener información específica sobre costos y opciones de ayuda, te recomendamos contactar con la oficina de finanzas o visitar nuestro sitio web.' },
    { pregunta: '¿Cómo se garantiza la seguridad de los estudiantes en el campus?', respuesta: 'La seguridad de nuestros estudiantes es una prioridad. Contamos con medidas de seguridad en todo el campus, incluyendo personal de seguridad, sistemas de vigilancia y protocolos de emergencia. Además, ofrecemos recursos y servicios para promover un entorno seguro y saludable.' },
    { pregunta: '¿Qué programas académicos y carreras ofrece la universidad?', respuesta: 'Ofrecemos una amplia gama de programas académicos y carreras en diversas disciplinas. Puedes explorar nuestra oferta educativa en el catálogo de programas en nuestro sitio web o contactar con la oficina académica para obtener información detallada.' },
    { pregunta: '¿Cómo funciona el sistema de asesoramiento académico?', respuesta: 'Nuestro sistema de asesoramiento académico está diseñado para apoyar a los estudiantes en su desarrollo académico y personal. Los estudiantes pueden programar sesiones de asesoramiento con consejeros académicos para discutir metas, planificación de cursos y cualquier otra inquietud académica.' },
    { pregunta: '¿Qué oportunidades de empleo y prácticas profesionales existen para los estudiantes?', respuesta: 'Ofrecemos diversas oportunidades de empleo y prácticas profesionales para nuestros estudiantes. Trabajamos en colaboración con empresas e instituciones para brindar experiencias prácticas que complementen la formación académica. Puedes obtener más detalles en la oficina de colocación laboral o en nuestro portal de empleo.' },
  ];

  getFaqs(): FaqItem[] {
    return this.faqList;
  }
}
