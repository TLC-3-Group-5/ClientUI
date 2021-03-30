import { Injectable } from '@angular/core';
import { SessionModelService } from '../services/sessionModel.service'

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  SessionModelService:SessionModelService=new SessionModelService();
  constructor() { }


  public set(key:string, value:string){
    this.SessionModelService[key]=value;
  }
  get(key:string):string{
    return this.SessionModelService[key]
  }
  remove(key:string){
    this.SessionModelService[key]=null;
  }
  clear(){
  this.SessionModelService=new SessionModelService();
  }

}
