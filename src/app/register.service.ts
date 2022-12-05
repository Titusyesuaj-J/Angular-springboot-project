import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseURL ="http://localhost:8080/user";
  constructor(private httpclient:HttpClient) { }

  registerUser(register:Register):Observable<Object>{
    return this.httpclient.post(`${this.baseURL}/newuser`,register);
}
}
