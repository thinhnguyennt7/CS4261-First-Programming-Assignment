import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private http: HttpClient) { }

  baseUrl: string = 'https://cs4261-assignment.herokuapp.com';
  response: any;

  get(url: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + url);
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + url, data);
  }
}
