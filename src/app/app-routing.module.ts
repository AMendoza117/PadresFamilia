import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DudasComponent } from './componentes/dudas/dudas.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { TurismoComponent } from './turismo/turismo.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent , data: { breadcrumb: 'Home' } },
  { path: 'dudas', component: DudasComponent, data: { breadcrumb: 'Dudas' }},
  { path: 'carreras', component: CarrerasComponent, data: { breadcrumb: 'Carreras' }},
  { path: 'turismo', component: TurismoComponent, data: { breadcrumb: 'Turismo' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
