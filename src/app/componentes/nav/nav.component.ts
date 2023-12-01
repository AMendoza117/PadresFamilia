import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalCorreoComponent } from 'src/app/modal-correo/modal-correo.component';
import { MouseEventsService } from 'src/app/TTS/mouse-events.service';
import { TextToVoiceService } from 'src/app/TTS/text-to-voice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  ngOnInit(): void {
  }

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService, public textToVoiceService: TextToVoiceService) {}
    
  openModal() {
    this.bsModalRef = this.modalService.show(ModalCorreoComponent);
  }

  toggleReading(): void {
    this.textToVoiceService.toggleEnabled();
  }
}
