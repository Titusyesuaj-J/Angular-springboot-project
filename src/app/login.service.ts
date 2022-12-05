import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL="http://localhost:8080/user"
  constructor(private httpclient:HttpClient) { }

    loginUser(login:Login):Observable<Object>{
      return this.httpclient.post(`${this.baseURL}/login`,login);
  }

}

