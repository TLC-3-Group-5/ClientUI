import { BuyComponent } from './Credentials/Buy/Buy.component';
import { GetStartedComponent } from './Credentials/GetStarted/GetStarted.component';
import { MarketDataComponent } from './Credentials/MarketData/MarketData.component';
import { MainComponent } from './Credentials/Main/Main.component';
import { FooterComponent } from './Credentials/Footer/Footer.component';
import { HeaderComponent } from './Credentials/Header/Header.component';
import { ForgotComponent } from './Credentials/Forgot/Forgot.component';
import { RegisterComponent } from './Credentials/Register/Register.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Credentials/Login/Login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
