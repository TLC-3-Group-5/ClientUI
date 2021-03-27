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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    BuyComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }