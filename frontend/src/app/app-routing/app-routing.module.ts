import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { SigninComponent } from '../signin/signin.component';
import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';
import { SmitComponent } from '../smit/smit.component';
import { AdminComponent } from '../admin/admin.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'smit',
    component: SmitComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
