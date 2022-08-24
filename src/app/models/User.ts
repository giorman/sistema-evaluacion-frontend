import { last } from "rxjs";

export class User{

  id!:number;
  username!:string;
  password!:string;
  name!:string;
  lastname!:string;
  email!:string
  telephone!:string;
  enable!:boolean;
  profile!:string;
  authorities!:any[];

  User(){

    this.id=this.id;
    this.username=this.username;
    this.password=this.password;
    this.name=this.name;
    this.lastname=this.lastname;
    this.email=this.email;
    this.telephone=this.telephone;
    this.enable=this.enable;
    this.profile=this.profile;

  }


}
