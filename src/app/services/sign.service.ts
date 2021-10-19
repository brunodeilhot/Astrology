import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sign } from '../models/sign-details';


@Injectable({
  providedIn: 'root'
})
export class SignService {

  private baseUrl: string = 'https://aztro.sameerkumar.website';

  headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

  sign: string = '';
  date: string = '';

  params = new HttpParams();

  constructor(
    private http: HttpClient
  ) { }

getSign(sign: string ,date: string): Observable<Sign> {
  this.sign = sign;
  this.date = date;

  this.updateParams()

  return this.http.post<Sign>(`${this.baseUrl}`,
  { headers: this.headers }, { params: this.params })
}

updateParams() {
  this.params = new HttpParams()
  .set('sign', this.sign)
  .set('day', this.date);
}

}

