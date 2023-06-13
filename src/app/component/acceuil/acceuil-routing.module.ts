import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetencesComponent } from '../competences/competences.component';
import { DiplomesComponent } from '../diplomes/diplomes.component';
import { AcceuilComponent } from './acceuil.component';
import { PresentationComponent } from '../presentation/presentation.component';
import { ParcoursComponent } from '../parcours/parcours.component';

const routes: Routes = [
  {
    path:'competences',
    component:CompetencesComponent,
  },
  {
    path:'diplomes',
    component:DiplomesComponent,
  },
  {
    path:'acceuil',
    component:AcceuilComponent,
  },
  {
    path:'parcours',
    component:ParcoursComponent,
  },
  {
    path:'presentation',
    component:PresentationComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcceuilRoutingModule { }
