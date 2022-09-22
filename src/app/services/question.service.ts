import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Question } from '../models/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private endpoint = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

  public getQuestion(questionId:any){
    return this.http.get(`${this.endpoint}/question/${questionId}`);
  }

  public addQuestion(question:Question){
    return this.http.post(`${this.endpoint}/question/`,question);
  }

  public deleteQuestion(questionId:any){
    return this.http.delete(`${this.endpoint}/question/${questionId}`);
  }

  public updateQuestion(question:Question){
    return this.http.put(`${this.endpoint}/question/`,question);
  }

  public listQuestionByEvaluation(evaluationId:any){
    return this.http.get(`${this.endpoint}/question/evaluation/${evaluationId}`);
  }

  public checkEvaluation(preguntas:any){
    return this.http.post(`${this.endpoint}/result/evaluation`,preguntas);
  }
}
