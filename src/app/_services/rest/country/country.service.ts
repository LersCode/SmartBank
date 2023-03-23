import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/_interfaces/rest/country';
import { RestService } from '../rest.service';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private readonly baseUrl = 'country';

  constructor(private restService: RestService) {}

  public getCountrys(): Observable<Country[]> {
    return this.restService.get(this.baseUrl + '/all');
  }
}
