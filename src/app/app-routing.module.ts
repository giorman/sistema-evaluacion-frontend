import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { NormalDashboardComponent } from './pages/normal/normal-dashboard/normal-dashboard.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { AddCatergoryComponent } from './pages/admin/add-catergory/add-catergory.component';
import { ViewEvaluationComponent } from './pages/admin/view-evaluation/view-evaluation.component';
import { AddEvaluationComponent } from './pages/admin/add-evaluation/add-evaluation.component';
import { UpdateEvaluationComponent } from './pages/admin/update-evaluation/update-evaluation.component';
import { ViewEvaluationQuestionComponent } from './pages/admin/view-evaluation-question/view-evaluation-question.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { LoadEvaluationComponent } from './pages/normal/load-evaluation/load-evaluation.component';
import { InstructionsComponent } from './pages/normal/instructions/instructions.component';
import { StartComponent } from './pages/normal/start/start.component';
import { WelcomeComponent as WelcomeNormal} from './pages/normal/welcome/welcome.component';
import { UpdateCategoryComponent } from './pages/admin/update-category/update-category.component';



const routes: Routes = [
  {path :'signup',component : SignupComponent},
  {path :'',component : LoginComponent},
  {path:'admin',component:DashboardComponent,canActivate:[AdminGuard],children:[
    {
      path:'',
      component:WelcomeComponent},
    {
      path:'profile',
      component:ProfileComponent},
    {
      path:'categories',
      component:ViewCategoryComponent
    },
    {
      path:'add-category',
      component:AddCatergoryComponent
    },
    {
      path:'category/:categoryId',
      component:UpdateCategoryComponent
    },
    {
      path:'evaluation',
      component:ViewEvaluationComponent
    },
    {
      path:'add-evaluation',
      component:AddEvaluationComponent
    },
    {
      path:'evaluation/:evaluationId',
      component:UpdateEvaluationComponent
    },
    {
      path:'view-question/:evaluationId/:title',
      component:ViewEvaluationQuestionComponent
    },
    {
      path:'add-question/:evaluationId/:title',
      component : AddQuestionComponent
    },
    {
      path:'question/:questionId',
      component: UpdateQuestionComponent
    }
  ]
},
  {
    path:'normal',
    component:NormalDashboardComponent,
    canActivate:[NormalGuard],
    children : [
      {
        path:'',
        component:WelcomeNormal},
      {
        path:'profile',
        component:ProfileComponent},
      {
        path:':catId',
        component:LoadEvaluationComponent
      },
      {
        path:'instructions/:evaluationId',
        component:InstructionsComponent
      }
    ]
  },
  {
    path:"start/:evaluationId",
    component:StartComponent,
    canActivate:[NormalGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
