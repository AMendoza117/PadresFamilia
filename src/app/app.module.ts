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

@NgModule({
  declarations: [
    AppComponent,
    DudasComponent,
    NavComponent,
    CarrerasComponent,
    TurismoComponent,
    ContrastButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
