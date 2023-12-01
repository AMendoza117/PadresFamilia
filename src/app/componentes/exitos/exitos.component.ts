import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exitos',
  templateUrl: './exitos.component.html',
  styleUrls: ['./exitos.component.css']
})
export class ExitosComponent implements OnInit {

  mensajes: string[] = [];

  enviarMensaje(mensaje: string) {
    // Lógica para procesar el mensaje del usuario
    this.mensajes.push(`Usuario: ${mensaje}`);

    // Lógica para la respuesta del asistente
    this.mensajes.push(`Asistente: Respuesta a ${mensaje}`);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
