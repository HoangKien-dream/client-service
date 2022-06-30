import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import en from "@angular/common/locales/en";
const baseUrl = 'http://localhost:8085/api/v1/product';
const category = 'http://localhost:8085/api/v1/category';
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
  getAll(page:any,size:any,keyword:any,categoryId:any,startPrice:any,endPrice:any): Observable<any> {
    return this.http.get<any>(`${baseUrl}?page=${page}&size=${size}&keyword=${keyword}&category=${categoryId}&startPrice=${startPrice}&endPrice=${endPrice}`,httpOptions);
  }
  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`,httpOptions);
  }
  getCategory():Observable<any>{
    return this.http.get(`${category}`,httpOptions)
  }
  save(data:any):Observable<any>{
    return this.http.post(baseUrl,data,httpOptions)
  }
  edit(id:any,data:any):Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data,httpOptions)
  }
  delete(id:any):Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`)
  }
}
