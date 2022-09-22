import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Evaluation } from '../models/Evaluation';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  private endpoint = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public listEvaluations(){
    return this.http.get(`${this.endpoint}/list/evaluation`);
  }

  public addEvaluation(evaluation:Evaluation){
    return this.http.post(`${this.endpoint}/evaluation/`,evaluation);
  }

  public deleteEvaluacion(id:String){
    return this.http.delete(`${this.endpoint}/evaluation/${id}`);
  }

  public getEvaluation(id:String){
    return this.http.get(`${this.endpoint}/evaluation/${id}`);
  }

  public updateEvaluation(evaluation:Evaluation){
    return this.http.put(`${this.endpoint}/evaluation/`,evaluation);
  }

  public getEvaluationEnable(){
    return this.http.get(`${this.endpoint}/evaluation/enable`);
  }

  public getEvaluationEnableByCategory(categoryId:String){
    return this.http.get(`${this.endpoint}/evaluation/enable/category/${categoryId}`);
  }

}
