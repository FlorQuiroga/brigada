import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { UrlServiceProvider } from '../providers/url-service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

/*
  Generated class for the TecnicosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TecnicosServiceProvider {
  public url: string;//variable que contiene la url d edonde estan colgados los ws
  public urlWs: UrlServiceProvider;
  constructor(private http: Http,
    urlWs2: UrlServiceProvider) {
    this.urlWs = urlWs2;
    console.log('Hello TecnicosServiceProvider Provider');
  }
  getTecnicosAll() {
    this.url = this.urlWs.getUrl();

    return this.http.get(this.url + '/Tecnicos.asmx/GettecnicosALL')
  }

  getTecnicoperfil(tecnicos) {
    this.url = this.urlWs.getUrl();

    return this.http.get(this.url + '/Tecnicos.asmx/tecnicosPerfil?TecID=' + tecnicos)
  }
  updateTecnicoperfil(Nombre, Apellido, Mail, Telefono, Imagen1, Imagen2, Calle, CalleNro,
    CodigoPostal, Localidad, Provincia, Pais, TecnicoID, DomicilioID,tipoDoc,nroDoc) {
    this.url = this.urlWs.getUrl();

    return this.http.get(this.url + '/Tecnicos.asmx/UpdatetecnicoPerfil?Nombre=' + Nombre + '&Apellido=' + Apellido +
      '&Mail=' + Mail + '&Telefono=' + Telefono + '&Imagen1=' + Imagen1 + '&Imagen2=' + Imagen2 + '&Calle=' + Calle +
      '&CalleNro=' + CalleNro + '&CodigoPostal=' + CodigoPostal + '&Localidad=' + Localidad + '&Provincia=' + Provincia +
      '&Pais=' + Pais + '&TecnicoID=' + TecnicoID + '&DomicilioID=' + DomicilioID+'&tipoDoc=' + tipoDoc+'&nroDoc=' + nroDoc)
  }


}
