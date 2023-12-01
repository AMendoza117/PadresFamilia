import { FontSizeButtonComponent } from './font-resizer/font-resizer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DudasComponent } from './componentes/dudas/dudas.component';
import { NavComponent } from './componentes/nav/nav.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { TurismoComponent } from './turismo/turismo.component';
import { ContrastButtonComponent } from './contrast-button/contrast-button.component';
import { HomeComponent } from './componentes/home/home.component';
import { ExitosComponent } from './componentes/exitos/exitos.component';
import { CasoexitoComponent } from './componentes/casoexito/casoexito.component';
import { MouseListenerDirective } from './TTS/mouse-listener.directive';
import { TextToVoiceService } from './TTS/text-to-voice.service';
import { FormModalComponent } from './form-modal/form-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DudasComponent,
    NavComponent,
    CarrerasComponent,
    TurismoComponent,
    ContrastButtonComponent,
    HomeComponent,
    ExitosComponent,
    CasoexitoComponent,
    FontSizeButtonComponent,
    MouseListenerDirective,
    FormModalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TextToVoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
