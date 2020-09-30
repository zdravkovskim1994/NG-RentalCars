import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private _url: string = "http://localhost:3000/cars";

  constructor(private http: HttpClient) { }

  getCars() {
    return this.http.get(this._url);
  }

  getCar(id: number) {
    return this.http.get(this._url + '/' + id);
  } 
}
