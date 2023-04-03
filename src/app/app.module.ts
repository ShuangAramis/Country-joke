import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { JokeListComponent } from './pages/joke-list/joke-list.component';
import { CountryComponent } from './components/country/country.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { JokeComponent } from './components/joke/joke.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    JokeListComponent,
    CountryComponent,
    HeaderComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
