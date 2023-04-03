export interface Country {
  name: {
    common: string;
  };
  capital: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    }
  };
  flag: string;
  languages: {
    [key: string]: string;
  };
  region: string;
}
