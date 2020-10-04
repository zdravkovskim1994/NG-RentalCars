import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  _url: string = "http://localhost:3000/contactMessage";
  constructor(private http: HttpClient) { }

  postData(data: any) {
    return this.http.post(this._url, data);
  }
}
