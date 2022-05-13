import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class AfterloginService {


  
  baseUrl='http://localhost:9999/obs/txn/get';
  baseUrl1='http://localhost:9999/obs/txn/all';
  baseUrl2='http://localhost:9999/obs/txn/add';
  constructor(private http:HttpClient) { }

  getPassbook(uid:any):Observable<any>{
    return this.http.get(`${this.baseUrl1}/${uid}`);
  }

  lastTransaction(id:string):Observable<any>{
    return this.http.get( `${this.baseUrl}/${id}`)
  }

  addTransaction(transact:Object):Observable<Object> {
    return this.http.post(`${this.baseUrl2}`,transact);
  }

  
}
