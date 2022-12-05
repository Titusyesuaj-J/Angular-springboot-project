import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consult } from './consult';
@Injectable({
  providedIn: 'root'
})
export class ConsultService {
  private baseURL ="http://localhost:8080/register"
  constructor(private httpclient:HttpClient) { }

  consultuser(consult:Consult):Observable<Object>{
    return this.httpclient.post(`${this.baseURL}/newuser`,consult);
}
}
