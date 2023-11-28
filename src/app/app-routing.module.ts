import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DudasComponent } from './componentes/dudas/dudas.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { TurismoComponent } from './turismo/turismo.component';

const routes: Routes = [
  { path: 'dudas', component: DudasComponent},
  { path: 'carreras', component: CarrerasComponent},
  { path: 'turismo', component: TurismoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
