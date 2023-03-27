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

  public putUserPhotoPure(file: any): Observable<any> {
    // Send the image from a form to the backend
    return this.restService.put(this.baseUrl + '/photoPure', file);

    /**
     * The problem was that the backend was expecting a multipart/form-data request, but the frontend was sending a JSON request.
     * We were sending the image as a JSON object => { photo: file }
     * Instead we should send the image directly as it is => body = file.
     */
  }
}
