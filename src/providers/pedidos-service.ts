import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { UrlServiceProvider } from '../providers/url-service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

/*
  Generated class for the PedidosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PedidosServiceProvider {
  public url: string;//variable que contiene la url d edonde estan colgados los ws
  public urlWs: UrlServiceProvider;
  constructor(private http: Http,
    urlWs2: UrlServiceProvider) {
    this.urlWs = urlWs2;
    console.log('Hello PedidosServiceProvider Provider');
  }


  InsPedido(ClienteID, DomicilioID, ArticuloID, calle, NroCalle, cp, Loc, Prov,
    pais, descripcion, Horarios ,latitud, Longitud,areaid ) {
    this.url = this.urlWs.getUrl();

    return this.http.get(this.url + '/pedidosolicitud.asmx/INSPedido?ClienteID=' + ClienteID + '&DomicilioID=' + DomicilioID +
      '&ArticuloID=' + ArticuloID + '&calle=' + calle + '&NroCalle=' + NroCalle + '&cp=' + cp + '&Loc=' + Loc +
      '&Prov=' + Prov + '&pais=' + pais + '&descripcion=' + descripcion + '&Horarios=' + Horarios +
      '&latitud=' + latitud + '&Longitud=' + Longitud + '&AreaID=' + areaid )
  }

  PedidoTecnicoINS(PedidoID,tecnicoID){

    this.url = this.urlWs.getUrl();
    return this.http.get(this.url + '/pedidosolicitud.asmx/PedidoTecnicoINS?PedidoReparacionID=' + PedidoID + '&TecnicoID=' + tecnicoID )
  }
}
