import { Component, OnInit } from '@angular/core';
import { MouseEventsService } from 'src/app/TTS/mouse-events.service';
import { TextToVoiceService } from 'src/app/TTS/text-to-voice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public textToVoiceService: TextToVoiceService) { }

  ngOnInit(): void {
  }

  toggleReading(): void {
    this.textToVoiceService.toggleEnabled();
  }

}
