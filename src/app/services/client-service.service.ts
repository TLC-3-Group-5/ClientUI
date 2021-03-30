import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  private MALON_API_SERVER = "https://exchange.matraining.com";

  private CLIENT_SERVER = "https://g5-client-connectivity.herokuapp.com";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public getMarketData(){
    return this.httpClient.get(this.MALON_API_SERVER+'/md').pipe( catchError(err => {
      console.log('Handling error locally and rethrowing it...', err);
      return throwError(err);
  }));
  }

  public signup(details:any){
    return this.httpClient.post(this.CLIENT_SERVER+'/client/signup',details).pipe( catchError(err => {
      console.log('Handling error locally and rethrowing it...', err);
      return throwError(err);
  }));
  }

  public login(details:any){
    return this.httpClient.post(this.CLIENT_SERVER+'/client/login',details).pipe( catchError(err => {
      console.log('Handling error locally and rethrowing it...', err);
      return throwError(err);
  }));
  }
}
