import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-correo',
  templateUrl: './modal-correo.component.html',
  styleUrls: ['./modal-correo.component.css']
})
export class ModalCorreoComponent implements OnInit {

  ngOnInit(): void {
  }
  
  constructor(public bsModalRef: BsModalRef) {}

  enviarCorreo() {
    // Aquí puedes agregar la lógica para enviar el correo
    // Por ahora, simplemente reiniciamos los campos y mostramos una notificación
    alert('Correo enviado');
    this.bsModalRef.hide();
  }
}
