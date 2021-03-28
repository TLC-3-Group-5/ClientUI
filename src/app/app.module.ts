import { BuyComponent } from './components/Buy/Buy.component';
import { GetStartedComponent } from './components/GetStarted/GetStarted.component';
import { MarketDataComponent } from './components/MarketData/MarketData.component';
import { MainComponent } from './components/Main/Main.component';
import { FooterComponent } from './components/Footer/Footer.component';
import { HeaderComponent } from './components/Header/Header.component';
import { ForgotComponent } from './components/Forgot/Forgot.component';
import { RegisterComponent } from './components/Register/Register.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/Login/Login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvestPageComponent } from './components/InvestPage/InvestPage.component';
import { AboutUsComponent } from './components/AboutUs/AboutUs.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    MainComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    HeaderComponent,
    HeaderComponent,
    FooterComponent,
    MarketDataComponent,
    GetStartedComponent,
    BuyComponent,
    InvestPageComponent,
    AboutUsComponent,
    DashboardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
