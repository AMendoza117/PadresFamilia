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
import { BreadcrumbComponent } from './componentes/breadcrumb/breadcrumb.component';
import { HomeComponent } from './componentes/home/home.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { FontSizeButtonComponent } from './font-resizer/font-resizer.component';
import { ExitosComponent } from './componentes/exitos/exitos.component';
import { Casoexito1Component } from './componentes/casoexito1/casoexito1.component';
import { Casoexito2Component } from './componentes/casoexito2/casoexito2.component';
import { Casoexito3Component } from './componentes/casoexito3/casoexito3.component';
import { Casoexito4Component } from './componentes/casoexito4/casoexito4.component';



@NgModule({
  declarations: [
    AppComponent,
    DudasComponent,
    NavComponent,
    CarrerasComponent,
    TurismoComponent,
    ContrastButtonComponent,
    BreadcrumbComponent,
    HomeComponent,
    NosotrosComponent,
    FontSizeButtonComponent,
    ExitosComponent,
    Casoexito1Component,
    Casoexito2Component,
    Casoexito3Component,
    Casoexito4Component
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
