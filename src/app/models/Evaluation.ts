import { Question } from "./Question";
import { Category } from './Category';

export class Evaluation{

  id!:number;
  title!:string;
  description!:string;
  pointMax!:string;
  numberQuestion!:string;
  enable!:boolean;
  question!:Question[];
  category!:Category;

  Evaluation(){

    this.id=this.id;
    this.title=this.title;
    this.description=this.description;
    this.pointMax=this.pointMax;
    this.numberQuestion=this.numberQuestion;
    this.enable=this.enable;
    this.question=this.question;
    this.category=this.category;


  }
}
