import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8083/api/v1/wallet';
const  id = 1;

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  getWallet():Observable<any>
  {
    return this.http.get(`${baseUrl}/${id}`);
  }
  getHistory():Observable<any>{
    return  this.http.get(baseUrl);
  }
}
