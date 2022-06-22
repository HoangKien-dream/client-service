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
  getAll(page?:number, size?:number, keyword?:string,userName?:string,userPhone?:string,startDate?:string,endDate?:string,status?:string): Observable<any> {
    return this.http.get(`${baseUrl}?page=${page}&size=${size}&keyword=${keyword}&userName=${userName}&userPhone=${userPhone}$status=${status}&startDate=${startDate}&endDate=${endDate}`);
  }
  findById(id?:number):Observable<any>{
    return this.http.get(`${baseUrl}/${id}`)
  }
}
