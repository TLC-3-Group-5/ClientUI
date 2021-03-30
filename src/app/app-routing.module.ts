import { BuyComponent } from './components/Buy/Buy.component';
import { LoginComponent } from './components/Login/Login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/Register/Register.component';
import { ForgotComponent } from './components/Forgot/Forgot.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './components/Main/Main.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  }
  // { path: '',   redirectTo: 'all', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
