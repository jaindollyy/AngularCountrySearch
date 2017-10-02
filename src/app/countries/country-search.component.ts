import { Component, OnInit } from '@angular/core';

import { ICountry } from './country.interface';
import { CountryService } from './country.service';

@Component({
    templateUrl: './country-search.component.html',
    styleUrls: ['./country-search.component.css']
})
export class CountrySearchComponent implements OnInit {

     ngOnInit(): void {
        this._countryService.getCountries()
                .subscribe(c => {
                    this.countries =(c as any).RestResponse.result;
                    this.filteredCountries = this.countries;
                },
                    error => this.errorMessage = <any>error);
    }

    constructor(private _countryService: CountryService) {    }
   
     filter(filterBy: string): ICountry[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.countries.filter((country: ICountry) =>
              country.alpha3_code.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

   
    _searchString: string;
    get searchString(): string {
        return this._searchString;
    }
    set searchString(value: string) {
        this._searchString = value;
        this.filteredCountries = this.searchString ? this.filter(this.searchString) : this.countries;
    }

   
    pageTitle: string = 'Countries';
    errorMessage: string;

    filteredCountries: ICountry[];
    countries: ICountry[] = [];   
   
}
