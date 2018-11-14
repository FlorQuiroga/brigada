import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { UrlServiceProvider } from '../providers/url-service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

/*
  Generated class for the ClientesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClientesServiceProvider {
  public url: string;//variable que contiene la url d edonde estan colgados los ws
  public urlWs: UrlServiceProvider;
  constructor(public http: Http, urlWs2: UrlServiceProvider) {
    this.urlWs = urlWs2
    console.log('Hello ClientesServiceProvider Provider');
  }

  insertarEncuesta(tecnico, calificacion, descripcion, clienteid) {
    this.url = this.urlWs.getUrl();
    if(clienteid==""){
      clienteid=0;
    }

    if(tecnico==""){
      tecnico=0;
    }
    return this.http.get(this.url + '/Clientes.asmx/GuardarEncuestaDelCliente?tecnico=' + tecnico + '&obs=' + descripcion + '&califica=' + calificacion + '&clienteid=' + clienteid)
  }

  getClienteAll(){
    this.url = this.urlWs.getUrl();

    return this.http.get(this.url + '/Clientes.asmx/GetClientesALL')
  }

  getClienteperfil(cliente){
    this.url = this.urlWs.getUrl();

    return this.http.get(this.url + '/Clientes.asmx/ClientesPerfil?CliID='+cliente)
  }

  updateClienteperfil(Nombre, Apellido, Mail, Telefono, RazonSocial, TipoFactura, Calle, CalleNro,
    CodigoPostal, Localidad, Provincia, Pais, ClienteID, DomicilioID){
    this.url = this.urlWs.getUrl();

    return this.http.get(this.url + '/Clientes.asmx/UpdateClientePerfil?Nombre='+Nombre+'&Apellido='+Apellido+
    '&Mail='+Mail+'&Telefono='+Telefono+'&RazonSocial='+RazonSocial+'&TipoFactura='+TipoFactura+'&Calle='+Calle+
    '&CalleNro='+CalleNro+'&CodigoPostal='+CodigoPostal+'&Localidad='+Localidad+'&Provincia='+Provincia+
    '&Pais='+Pais+'&ClienteID='+ClienteID+'&DomicilioID='+DomicilioID)
  }
  insertarCliente(Nombre, Apellido, Mail, Telefono, RazonSocial, TipoFactura, Calle, CalleNro,
    CodigoPostal, Localidad, Provincia, Pais,TipoDocumento,NroDocumento){
      this.url = this.urlWs.getUrl();
      return this.http.get(this.url + '/Usuarios.asmx/GuardarCliente?nombre='+Nombre+'&apellido='+Apellido+
    '&mail='+Mail+'&telefono='+Telefono+ '&tipoDocuemnto='+TipoDocumento+'&nroDocumento='+NroDocumento+ '&razonsocial='+RazonSocial+'&tipofac='+TipoFactura+'&calle='+Calle+
    '&callenro='+CalleNro+'&cp='+CodigoPostal+'&localidad='+Localidad+'&provincia='+Provincia+
    '&pais='+Pais)
   
    }
   

}
