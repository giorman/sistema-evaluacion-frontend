import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private endpoint = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public listCategories(){
    return this.http.get(`${this.endpoint}/list/category`);
  }

  public getCategory(categoryId:any){
    return this.http.get(`${this.endpoint}/category/${categoryId}`,);
  }

  public addCategory(category:Category){
    return this.http.post(`${this.endpoint}/category`,category);
  }

  public updateCategory(category:Category){
    return this.http.put(`${this.endpoint}/category`,category);
  }

  public deleteCategory(id:any){
    return this.http.delete(`${this.endpoint}/category/${id}`);
  }
}
