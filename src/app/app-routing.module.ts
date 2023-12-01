import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DudasComponent } from './componentes/dudas/dudas.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { TurismoComponent } from './turismo/turismo.component';
import { HomeComponent } from './componentes/home/home.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ExitosComponent } from './componentes/exitos/exitos.component';
import { Casoexito1Component } from './componentes/casoexito1/casoexito1.component';
import { Casoexito2Component } from './componentes/casoexito2/casoexito2.component';
import { Casoexito3Component } from './componentes/casoexito3/casoexito3.component';
import { Casoexito4Component } from './componentes/casoexito4/casoexito4.component';

const routes: Routes = [
  { path: '', component: HomeComponent , data: { breadcrumb: 'Home' } },
  { path: 'dudas', component: DudasComponent, data: { breadcrumb: 'Dudas' }},
  { path: 'carreras', component: CarrerasComponent, data: { breadcrumb: 'Carreras' }},
  { path: 'turismo', component: TurismoComponent, data: { breadcrumb: 'Turismo' }},
  { path: 'nosotros', component: NosotrosComponent, data: { breadcrumb: 'Nosotros' }},
  { path: 'exitos', component: ExitosComponent, data: { breadcrumb: 'Exitos' }},
  { path: 'casoexito1', component: Casoexito1Component, data: { breadcrumb: 'Exito 1' }},
  { path: 'casoexito2', component: Casoexito2Component, data: { breadcrumb: 'Exito 2' }},
  { path: 'casoexito3', component: Casoexito3Component, data: { breadcrumb: 'Exito 3' }},
  { path: 'casoexito4', component: Casoexito4Component, data: { breadcrumb: 'Exito 4' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
