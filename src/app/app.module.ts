import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { CardComponent } from './component/card/card.component';
import { ParcoursComponent } from './component/parcours/parcours.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AcceuilComponent } from './component/acceuil/acceuil.component';
import { PresentationComponent } from './component/presentation/presentation.component';
import { DiplomesComponent } from './component/diplomes/diplomes.component';
import { CompetencesComponent } from './component/competences/competences.component';
import { AcceuilModule } from './component/acceuil/acceuil.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CardComponent,
    ParcoursComponent,
    NavbarComponent,
    AcceuilComponent,
    PresentationComponent,
    DiplomesComponent,
    CompetencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AcceuilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
