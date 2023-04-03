import {Component, OnInit} from '@angular/core';
import {CountryService} from "../../services/country.service";
import {Country} from "../../models/country.model";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  public countries: Country[] = [];
  public displayedCountries: Country[] = []

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(countries => {
      this.countries = countries;
      this.sortCountriesByAlphabet();
    });
  }

  public sortCountriesByAlphabet(): void {
    this.displayedCountries = this.countries.sort(
      (a, b) => a.name.common.localeCompare(b.name.common)
    );
  }

  public filterCountriesByRegion(region: string): void {
    this.displayedCountries = this.countries.filter(country => country.region === region);
  }

  public filterCountriesByLanguage(language: string): void {
    this.displayedCountries = this.countries.filter(country => {
      return country.languages && Object.keys(country.languages).includes(language);
    });
  }

  public filterCountriesByCurrency(currency: string): void {
    this.displayedCountries = this.countries.filter(country => {
      return country.currencies && Object.keys(country.currencies).includes(currency);
    });
  }
}
