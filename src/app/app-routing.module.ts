import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountryListComponent} from "./pages/country-list/country-list.component";
import {JokeListComponent} from "./pages/joke-list/joke-list.component";

const routes: Routes = [
  {
    path: '',
    component: CountryListComponent
  },
  {
    path: 'joke',
    component: JokeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
