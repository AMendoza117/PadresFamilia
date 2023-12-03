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
import { ModalCorreoComponent } from './modal-correo/modal-correo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ExitosComponent } from './componentes/exitos/exitos.component';
import { CasoexitoComponent } from './componentes/casoexito/casoexito.component';
import { MouseListenerDirective } from './TTS/mouse-listener.directive';
import { TextToVoiceService } from './TTS/text-to-voice.service';
import { FormModalComponent } from './form-modal/form-modal.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { DaltonismButtonComponent } from './componentes/daltonism-button/daltonism-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DudasComponent,
    NavComponent,
    CarrerasComponent,
    TurismoComponent,
    ContrastButtonComponent,
    HomeComponent,
    ModalCorreoComponent,
    CasoexitoComponent,
    FontSizeButtonComponent,
    MouseListenerDirective,
    FormModalComponent,
    NosotrosComponent,
    FormModalComponent,
    ExitosComponent,
    DaltonismButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [TextToVoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
