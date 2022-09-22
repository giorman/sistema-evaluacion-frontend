import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  public logout() {
    Swal.fire({
      title: '¿Seguro quieres cerrar sesion?',
      icon: 'info',
      showCancelButton: true,
      cancelButtonColor: '#FFC50F',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.loginService.logout();
        this.router.navigateByUrl('/');
      }
    });

  }
}
