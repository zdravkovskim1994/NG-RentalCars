import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private _url: string = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  postData(data) {
    return this.http.post(this._url, data);
  }
}
