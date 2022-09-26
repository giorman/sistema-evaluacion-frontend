import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  user!: User;
  constructor(
    private fb: FormBuilder,
    private snack: MatSnackBar,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  //permite crear el formulario
  createForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.loginService.generateToken(this.form.value).subscribe(
      (result: any) => {
        this.loginService.loginUser(result.token);
        // se solicita el usuario logueado
        this.loginService.getCurrentUser().subscribe((result) => {
          this.user = result as User;
          this.loginService.setUser(this.user);
          if (this.loginService.getUserRole() == 'administrador') {
            //dashboard admin
            this.router.navigate(['admin']);
          } else if (this.loginService.getUserRole() == 'normal') {
            //dashboard user normal
            this.router.navigate(['normal']);
          } else {
            this.loginService.logout();
          }
        });
      },
      (error) => {
        console.log(error);
        this.snack.open(
          'Credenciales invalidas , vuelva a intentar !!',
          'Aceptar',
          {
            duration: 5000,
          }
        );
      }
    );
  }
}
