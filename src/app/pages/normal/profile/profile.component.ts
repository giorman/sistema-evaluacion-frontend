import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user!: User;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    if (this.loginService.getUser != null) {
      this.user = this.loginService.getUser;
    }
  }
}
