import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8081/api/v1/order';
const token = localStorage.getItem("vodung")
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':`Bearer ${token}`})
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  create(data:any): Observable<any>{
    return this.http.post(`${baseUrl}`, data,httpOptions);
  }
  getAll(page?:number, size?:number, keyword?:string,startDate?:string,endDate?:string): Observable<any> {
    return this.http.get(`${baseUrl}?page=${page}&size=${size}&keyword=${keyword}&startDate=${startDate}&endDate=${endDate}`,httpOptions);
  }
  findById(id?:number):Observable<any>{
    return this.http.get(`${baseUrl}/${id}`,httpOptions)
  }
}
