import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './component/acceuil/acceuil.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent,
children:[
  {
    path:'',
    loadChildren:() => import('./component/acceuil/acceuil.module').then(m => m.AcceuilModule)
  }
] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
