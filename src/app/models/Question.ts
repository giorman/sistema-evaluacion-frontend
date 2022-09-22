import { Evaluation } from "./Evaluation";

export class Question{

  id!:number;
  content!:string;
  option1!:string;
  option2!:string;
  option3!:string;
  option4!:string;
  responseUser!:string;
  responseCorrect!:string;
  evaluation!:Evaluation;

  Question(){

    this.id=this.id;
    this.content=this.content;
    this.option1=this.option1;
    this.option2=this.option2;
    this.option3=this.option3;
    this.option4=this.option4;
    this.responseUser=this.responseUser;
    this.responseCorrect=this.responseCorrect;
    this.evaluation=this.evaluation;

  }


}
