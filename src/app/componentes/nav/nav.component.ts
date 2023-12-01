import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalCorreoComponent } from 'src/app/modal-correo/modal-correo.component';
=======
import { MouseEventsService } from 'src/app/TTS/mouse-events.service';
import { TextToVoiceService } from 'src/app/TTS/text-to-voice.service';
>>>>>>> copia

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

<<<<<<< HEAD
  ngOnInit(): void {
  }

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal() {
    this.bsModalRef = this.modalService.show(ModalCorreoComponent);
  }
=======
  constructor(public textToVoiceService: TextToVoiceService) { }

  ngOnInit(): void {
  }

  toggleReading(): void {
    this.textToVoiceService.toggleEnabled();
  }

>>>>>>> copia
}
