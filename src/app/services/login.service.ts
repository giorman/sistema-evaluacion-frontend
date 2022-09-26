import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private endpoint = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  //generamos el token
  public generateToken(loginData:any){
    return this.http.post(`${this.endpoint}/login`,loginData);
  }

  //nos trae la info del usuario logueado
  public getCurrentUser(){
    return this.http.get(`${this.endpoint}/current-user`);
  }

  //iniciamos sesión y establecemos el token en el localStorage
  public loginUser(token:any):boolean{
    sessionStorage.setItem('token',token);
    return true;
  }

  //verifica si esta logueado
  get isLoggedIn():boolean{
    let tokenStr = sessionStorage.getItem('token');
    let userStr = sessionStorage.getItem('user');
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
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    return true;
  }

  //obtenemos el token
  public getToken(){
    return sessionStorage.getItem('token');
  }

  // enviamos el usuario obtenido al localStorage
  public setUser(user:User){
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  // obtenemos el user guardado el localStorage
  get getUser():User | null{
    let userStr = sessionStorage.getItem('user');
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
