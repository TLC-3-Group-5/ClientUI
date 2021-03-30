import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionModelService {
  [key: string]: number | string | boolean | any;
  userId?: any;
  userEmail?: any;

constructor() { }

}
