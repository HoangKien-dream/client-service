import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8080/api/v1';
const token = localStorage.getItem("token-day-ne")
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':`Bearer ${token}`})
};

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

  getInfor(username:any):Observable<any>{
    return this.http.get(`${baseUrl}/accounts/${username}`,httpOptions)
  }

  getRole():Observable<any>{
    return this.http.get(`${baseUrl}/role`,httpOptions)
  }

  getPermission():Observable<any>{
    return this.http.get(`${baseUrl}/permission`,httpOptions)
  }

  getAccount():Observable<any>{
    return this.http.get(`${baseUrl}/accounts`,httpOptions)
  }

}
