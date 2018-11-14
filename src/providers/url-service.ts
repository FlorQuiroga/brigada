import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the UrlServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UrlServiceProvider {


  public url:string;//variable que contiene la url d edonde estan colgados los ws

  constructor(public http: Http) {
  }
  getUrl() { 
    var url: string;
url='http://192.168.10.122'; 
    return url;  
       
}   
   

}
