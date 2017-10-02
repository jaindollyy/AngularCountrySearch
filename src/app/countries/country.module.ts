import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
import { CountrySearchComponent } from './country-search.component';
import { CountryService } from './country.service';


@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'countries', component: CountrySearchComponent }       
    ]),
    SharedModule
  ],
  declarations: [
    CountrySearchComponent
  ],
  providers: [
    CountryService   
  ]
})
export class CountryModule { }
