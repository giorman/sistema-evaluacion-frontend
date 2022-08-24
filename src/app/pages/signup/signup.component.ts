import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form!:FormGroup;
  user:User =new User();
  constructor(private fb:FormBuilder,private userService:UserService,private alert:AlertService) { }

  ngOnInit(): void {
    this.createForm();
  }

   //permite crear el formulario
   createForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
    });
  }

  //permite registrar el usuario
  addUser(){
  this.user = this.form.value as User;
    this.userService.addUser(this.user).subscribe((result)=>{
      this.alert.success('Registro','El usuario ha sido registrado correctamente')
    },(error)=>{
      this.alert.error('Registro','El usuario  no ha sido registrado')
    })

    this.form.reset();
  }

}
