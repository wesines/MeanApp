import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemaComponent } from './cinema/cinema.component';
import { TicketComponent } from './ticket/ticket.component';
import { PlaceComponent } from './place/place.component';
import { SalleComponent } from './salle/salle.component';
import { FilmComponent } from './film/film.component';
import { ProjectionfilmComponent } from './projectionfilm/projectionfilm.component';
import { VilleComponent } from './ville/ville.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CinemaService } from './services/cinema.service';



@NgModule({
  declarations: [
    AppComponent,
    VilleComponent,
    CinemaComponent,
    TicketComponent,
    PlaceComponent,
    SalleComponent,
    FilmComponent,
    ProjectionfilmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CinemaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
