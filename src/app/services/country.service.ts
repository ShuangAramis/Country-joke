import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Country} from "../models/country.model";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<Country[]>('https://restcountries.com/v3.1/all');
  }
}
