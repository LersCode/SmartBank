import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sample } from 'src/app/_interfaces/rest/sample';
import { RestService } from '../rest.service';

@Injectable({
  providedIn: 'root',
})
export class SampleService {
  private readonly baseUrl = 'sample';

  constructor(private restService: RestService) {}

  public getSampleData(): Observable<Sample> {
    return this.restService.get(this.baseUrl + '/hello');
  }

  public getSampleSecureData(): Observable<Sample> {
    return this.restService.get(this.baseUrl + '/helloSecure');
  }
}
