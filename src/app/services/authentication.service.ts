import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http:HttpClient) { }
  login(data:any):Observable<any>{
    return this.http.post(`${baseUrl}/login`,data);
  }
  register(data:any):Observable<any>{
    return this.http.post(`${baseUrl}/register`,data)
  }

}
