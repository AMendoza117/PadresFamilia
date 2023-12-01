import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DudasComponent } from './componentes/dudas/dudas.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { TurismoComponent } from './turismo/turismo.component';
import { HomeComponent } from './componentes/home/home.component';
import { ExitosComponent } from './componentes/exitos/exitos.component';
import { CasoexitoComponent } from './componentes/casoexito/casoexito.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';

const routes: Routes = [
  { path: '', component: HomeComponent , data: { breadcrumb: 'Home' } },
  { path: 'dudas', component: DudasComponent, data: { breadcrumb: 'Dudas' }},
  { path: 'carreras', component: CarrerasComponent, data: { breadcrumb: 'Carreras' }},
  { path: 'turismo', component: TurismoComponent, data: { breadcrumb: 'Turismo' }},
  { path: 'exitos', component: ExitosComponent, data: { breadcrumb: 'Exitos' }},
  { path: 'casoexito', component: CasoexitoComponent, data: { breadcrumb: 'Caso de Exito' }},
  {path: 'nosotros', component: NosotrosComponent, data: { breadcrumb: 'Nosotros' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
