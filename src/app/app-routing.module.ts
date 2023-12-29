import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { NotificationComponent } from './notification/notification.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddStocksComponent } from './add-stocks/add-stocks.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'manage',
    component: ManageComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'about',
    component:AboutComponent
  },{
    path:'contact',
    component:ContactComponent
  },
  {
    path:'terms',
    component:TermsConditionComponent
  },
  {
    path:'notification',
    component:NotificationComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },{
    path:'signup',
    component:SignupComponent
  },
  {
    path:'add-stocks',
    component:AddStocksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }