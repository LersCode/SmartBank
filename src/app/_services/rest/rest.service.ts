import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private readonly API = 'http://localhost:8099/backend/api/';

  constructor(private readonly httpClient: HttpClient) {}

  get(url: string): Observable<any> {
    return this.httpClient.get(this.API + url);
  }

  put(url: string, body: any, options?: Object): Observable<Object> {
    return this.httpClient.put(this.API + url, body, options);
  }

  post(url: string, body: any, options?: Object): Observable<Object> {
    return this.httpClient.post(this.API + url, body, options);
  }

  delete(url: string, options?: Object): Observable<Object> {
    return this.httpClient.delete(this.API + url, options);
  }
}
