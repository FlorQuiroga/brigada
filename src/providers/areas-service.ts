import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { UrlServiceProvider } from '../providers/url-service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

/*
  Generated class for the AreasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AreasProvider {
  public url: string;//variable que contiene la url d edonde estan colgados los ws
  public urlWs: UrlServiceProvider;
  constructor(public http: Http, urlWs2: UrlServiceProvider) {
    this.urlWs = urlWs2
    
  }
  //trae todas las areas
  GetAreasALLS() {
    this.url = this.urlWs.getUrl();
    return this.http.get(this.url + '/Articulos.asmx/GetAreasALL')
  }

  getArticulosByAreas(area){
    this.url = this.urlWs.getUrl();
    return this.http.get(this.url + '/Articulos.asmx/GetArticulosByArea?AreaID=' + area)
  }
}
