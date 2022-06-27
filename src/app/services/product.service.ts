import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8085/api/v1/product';
const token = localStorage.getItem("token-day-ne")
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':`Bearer ${token}`})
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAll(page:any,size:any): Observable<any> {
    return this.http.get<any>(`${baseUrl}?page=${page}&size=${size}`,httpOptions);
  }
  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`,httpOptions);
  }
}
