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
  isInicio = true;
  isCarreras = false;
  isNosotros = false;
  isDudas = false;
  isExitos = false;
  
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
  
  isIn(site: string){
    //Cambiar todas las variables a false
    this.isInicio = false;
    this.isCarreras = false;
    this.isNosotros = false;
    this.isDudas = false;
    this.isExitos = false;
    
    //Cambiar la variable correspondiente a true
    switch(site){
      case 'inicio':
        this.isInicio = true;
        break;
      case 'carreras':
        this.isCarreras = true;
        break;
      case 'nosotros':
        this.isNosotros = true;
        break;
      case 'dudas':
        this.isDudas = true;
        break;
      case 'exitos':
        this.isExitos = true;
        break;
    }
  }
}
