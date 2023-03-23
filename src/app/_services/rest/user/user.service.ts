import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SBUser } from 'src/app/_interfaces/rest/user';
import { RestService } from '../rest.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly baseUrl = 'user';

  constructor(private restService: RestService) {}

  public getUser(): Observable<SBUser> {
    return this.restService.get(this.baseUrl);
  }

  public putUser(user: SBUser): Observable<any> {
    return this.restService.put(this.baseUrl, user);
  }

  public putUserPhoto(photo: File, description: string = ''): Observable<any> {
    const formData = new FormData();
    formData.append('photo', photo);
    return this.restService.put(this.baseUrl + '/photo', {
      file: formData,
      description: description,
    });
  }

  public putUserPhotoPure(photo: File): Observable<any> {
    const formData = new FormData();
    formData.append('photo', photo);
    return this.restService.put(this.baseUrl + '/photoPure', {
      file: formData,
    });
  }
}
