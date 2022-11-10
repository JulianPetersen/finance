import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor() { }


  createDocument(key:string, value){
      localStorage.setItem(key,value);
  }
}
