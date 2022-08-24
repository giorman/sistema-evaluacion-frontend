import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  public logout(){
    this.loginService.logout();
    this.router.navigateByUrl('login')
  }
}
