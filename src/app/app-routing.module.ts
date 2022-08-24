import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { AdminDashboardComponent } from './pages/dashboard/admin-dashboard/admin-dashboard.component';
import { NormalDashboardComponent } from './pages/dashboard/normal-dashboard/normal-dashboard.component';

const routes: Routes = [
  { path : '',component:HomeComponent},
  {path :'signup',component : SignupComponent},
  {path :'login',component : LoginComponent},
  {path:'admin',component:AdminDashboardComponent,canActivate:[AdminGuard]},
  {path:'user',component:NormalDashboardComponent,canActivate:[NormalGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
