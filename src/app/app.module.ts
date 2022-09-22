import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { SidebarComponent as SidebarNormal } from './pages/normal/sidebar/sidebar.component';
import { WelcomeComponent as WelcomeNormal } from './pages/normal/welcome/welcome.component';

import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { NormalDashboardComponent } from './pages/normal/normal-dashboard/normal-dashboard.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { AddCatergoryComponent } from './pages/admin/add-catergory/add-catergory.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { ViewEvaluationComponent } from './pages/admin/view-evaluation/view-evaluation.component';
import { AddEvaluationComponent } from './pages/admin/add-evaluation/add-evaluation.component';
import { ViewEvaluationQuestionComponent } from './pages/admin/view-evaluation-question/view-evaluation-question.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { UpdateEvaluationComponent } from './pages/admin/update-evaluation/update-evaluation.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { InstructionsComponent } from './pages/normal/instructions/instructions.component';
import { LoadEvaluationComponent } from './pages/normal/load-evaluation/load-evaluation.component';
import { StartComponent } from './pages/normal/start/start.component';
import { ProfileComponent as ProfileNormal } from './pages/normal/profile/profile.component';
import { UpdateCategoryComponent } from './pages/admin/update-category/update-category.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    NormalDashboardComponent,
    ProfileComponent,
    WelcomeComponent,
    AddCatergoryComponent,
    ViewCategoryComponent,
    ViewEvaluationComponent,
    AddEvaluationComponent,
    ViewEvaluationQuestionComponent,
    UpdateQuestionComponent,
    UpdateEvaluationComponent,
    AddQuestionComponent,
    SidebarNormal,
    InstructionsComponent,
    LoadEvaluationComponent,
    StartComponent,
    WelcomeNormal,
    ProfileNormal,
    UpdateCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSlideToggleModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
