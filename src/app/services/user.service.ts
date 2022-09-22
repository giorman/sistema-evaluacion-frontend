import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private endpoint = environment.apiBaseUrl;
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  });
  constructor(private http:HttpClient) {

   }

   addUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.endpoint}/user/save`,user);
   }
}
