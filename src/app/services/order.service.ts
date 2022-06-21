import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8081/api/v1/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  create(data:any): Observable<any>{
    return this.http.post(`${baseUrl}`, data);
  }
}
