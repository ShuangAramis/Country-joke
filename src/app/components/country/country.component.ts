import {Component, Input} from '@angular/core';
import {Country} from "../../models/country.model";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {

  // @ts-ignore
  @Input() country: Country;

  public capital: string = '';
  public currency: string = '';
  public language: string = '';

  ngOnInit(): void {
    this.capital = this.getCapital();
    this.currency = this.getCurrency();
    this.language = this.getLanguage();
  }

  public getCapital(): string {
    return this.country.capital ? this.country.capital.join(', ') : '';
  }

  public getCurrency(): string {
    return this.country.currencies ?
      Object.values(this.country.currencies).map(currency => currency.symbol).join(', ') : '';
  }

  public getLanguage(): string {
    return this.country.languages ? Object.values(this.country.languages).join(', ') : '';
  }
}
