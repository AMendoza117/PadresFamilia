// faq.service.ts

import { Injectable } from '@angular/core';
import { FaqItem1 } from '../models/faq1.model';

@Injectable({
  providedIn: 'root',
})
export class Faq1Service {
  private faqList1: FaqItem1[] = [
    { pregunta: 'Misión', respuesta: 'Somos una institución de Educación Superior Tecnológica comprometida en la formación integral de profesionistas líderes en los niveles de Técnico Superior Universitario y Licenciatura con programas educativos de excelencia, contribuyendo así, al desarrollo económico y social del estado y la región.' },
    { pregunta: 'Visión', respuesta: 'En el 2026 la Universidad Tecnológica del Norte de Guanajuato será una institución de educación superior reconocida nacional e internacionalmente por formar egresados competitivos que se integran exitosamente al ámbito laboral, en los que resaltará su formación humana e integral; se contará con programas educativos de excelencia, pertinentes e incluyentes: en los que se promueve la investigación aplicada e innovación tecnológica a través de sus cuerpos académicos; se tendrá una fuerte vinculación con todos los sectores y se impulsará el emprendimiento y la competitividad, contribuyendo así a la transformación de la educación en Guanajuato. Se consolidará el enfoque hacía la igualdad y no discriminación; al desarrollo sostenible y cuidado del ambiente; al respeto de los derechos humanos; a la promoción de la cultura de paz y no violencia; a la transparencia y rendición de cuentas en la gestión y administración de los recursos, utilizando para su implementación referentes estatales, nacionales e internacionales.' },
    { pregunta: 'Valores', respuesta: 'Para la UTNG los valores son el marco del comportamiento que deben tener sus integrantes, estos se determinaron en base a la razón de ser; al propósito de creación; y a la proyección en el futuro (visión) de la institución quedando redactados y descritos de la manera siguiente: * Rendición de Cuentas: Ejercemos nuestras funciones en el marco de las leyes, reglamentos y normas que las rigen. Rendimos cuenta sobre los resultados de nuestra gestión y del logro de las metas asignadas. Informamos a quien lo demande sobre nuestras decisiones y de ser necesario las justificamos en público. Informamos sobre el buen uso de los recursos asignados. Transparencia: Brindamos acceso a la toda la información pública que se genera o posea la universidad. Atendemos cualquier obligación y demanda de información. Generamos información veraz, completa, oportuna, accesible, confiable, verificable y en lenguaje sencillo. * Honestidad: Ofrecemos lo que podemos cumplir y nos esmeramos en lograrlo. Actuamos con exactitud y puntualidad. No dejamos los resultados al azar. Honramos y defendemos la propiedad ajena. Obramos con sentido consciente de justicia. Respetamos la verdad. * Responsabilidad: Ponemos atención especial en nuestras decisiones. Damos la cara por nuestros actos y sus consecuencias. * Somos previsores: planificamos y trabajamos con orden. Reconocemos nuestros errores al tiempo que buscamos corregirlos. * Respeto: Tratamos a las personas con dignidad y apreciamos sus opiniones. Tenemos consideración y deferencia con los sentimientos de los otros. Nos esforzamos por comprender sus situaciones particulares. * Trabajo en equipo: El éxito de la UTNG lo construimos juntos. Formamos equipo con todo compañero, incluidos los no afines. La armonía no se logra por casualidad: Se basa en el conocimiento y el aprecio por todos los miembros del equipo. Participamos activamente en equipos de alto desempeño y multidisciplinarios. * Comunicación: Nos esforzamos más en escuchar lo que tratan de decirnos. No damos nada por obvio. No suponemos. Evitamos los prejuicios. Si no nos llega la información la buscamos. No nos callamos cuando tenemos algo que decir. * Paz: Rechazamos cualquier tipo de violencia. Practicamos la empatía y asertividad. Somos solidarios (as) con los demás. Respetamos las opiniones de los demás.'},
    { pregunta: 'Política de Calidad', respuesta: 'La Universidad Tecnológica del Norte de Guanajuato se compromete con sus alumnos y la sociedad a ofrecer servicios educativos del nivel superior así como servicios de educación continua y tecnológicos con calidad, empleando de manera eficiente los recursos y aplicando la mejora continua en beneficio del desarrollo regional y ambiental previniendo la contaminación y apegándose a las disposiciones legales ambientales. Rev. 4' },
  ];

  getFaqs(): FaqItem1[] {
    return this.faqList1;
  }
}
