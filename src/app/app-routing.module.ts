import { BuyComponent } from './components/Buy/Buy.component';
import { MarketDataComponent } from './components/MarketData/MarketData.component';
import { LoginComponent } from './components/Login/Login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/Register/Register.component';
import { ForgotComponent } from './components/Forgot/Forgot.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgot-password',
    component: ForgotComponent
  },
  {
    path: 'buy-sell',
    component: BuyComponent
  },
  { path: '',   redirectTo: 'all', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
