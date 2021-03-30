import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  private MALON_API_SERVER = "https://exchange.matraining.com";

  constructor(private httpClient: HttpClient) { }

  public getMarketData(){
    return this.httpClient.get(this.MALON_API_SERVER+'/md');
  }
}
