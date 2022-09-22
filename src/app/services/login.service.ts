import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private endpoint = environment.apiBaseUrl;
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  });

  constructor(private http:HttpClient) { }

  //generamos el token
  public generateToken(loginData:any){
    return this.http.post(`${this.endpoint}/login`,loginData);
  }

  //nos trae la info del usuraio logueado
  public getCurrentUser(){
    return this.http.get(`${this.endpoint}/current-user`);
  }

  //iniciamos sesión y establecemos el token en el localStorage
  public loginUser(token:any):boolean{
    localStorage.setItem('token',token);
    return true;
  }

  //verifica si esta logueado
  get isLoggedIn():boolean{
    let tokenStr = localStorage.getItem('token');
    let userStr = localStorage.getItem('user');
    let validateUser:boolean= userStr == null || userStr == undefined || userStr == '';
    let validateToken:boolean= tokenStr == undefined || tokenStr == '' || tokenStr == null ;
    if(validateToken || validateUser ){
      return false;
    }else{
      return true;
    }
  }

  //cerramos sesion y eliminamos el token del localStorage
  public logout():boolean{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //obtenemos el token
  public getToken(){
    return localStorage.getItem('token');
  }

  // enviamos el usuario obtenido al localStorage
  public setUser(user:User){
    localStorage.setItem('user', JSON.stringify(user));
  }

  // obtenemos el user guardado el localStorage
  get getUser():User | null{
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  //obtiene el rol del usuario logueado
  public getUserRole(){
    return this.getUser?.authorities[0].authority;
  }
}
