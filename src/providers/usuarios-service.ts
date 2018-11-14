
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { UrlServiceProvider } from '../providers/url-service';
import { Login } from '../shared/model/login'
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { Tecnico } from '../shared/model/tecnico';

/*
  Generated class for the UsuariosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosServiceProvider {
  public url: string;//variable que contiene la url d edonde estan colgados los ws
  public urlWs: UrlServiceProvider;
  public myVal: string;
  public nombre: string;
  public apellido: string;
  public tipo: string;
  public usuarioID: number;
  public clienteID: number;
  public tecnicoID: number;
  public tecnicosJson: Array<Tecnico>;
  public objectJson: Array<Login>
  constructor(private http: Http,
    urlWs2: UrlServiceProvider) {
    this.urlWs = urlWs2;

  }

  ValidarUsuarioWS(usuario, contrasenha): Observable<any> {

    this.url = this.urlWs.getUrl();
    return this.http.get(this.url + '/Usuarios.asmx/ValidaUsuario?Usuario=' + usuario + '&Pass=' + contrasenha + '')
      .map(res => {
        this.myVal = (res.text());
        let posts = JSON.stringify(this.myVal);
        posts = this.myVal.replace('<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<string xmlns=\"http://tempuri.org/\">', "")
        posts = posts.replace('</string>', "")
        posts = posts.replace('}</string>', "")
        this.objectJson = JSON.parse(posts);

        if (this.objectJson.length != 0) {

          this.nombre = this.objectJson[0].Nombre;;
          this.apellido = this.objectJson[0].Apellido;
          this.usuarioID = this.objectJson[0].UsuarioID;
          this.clienteID = this.objectJson[0].ClienteID;
          this.tecnicoID = this.objectJson[0].TecnicoID;

          return true
        } else {

          return false;
        }
      });

  }
 
  getPedidosDisponibles(){
    this.url = this.urlWs.getUrl();

    return this.http.get(this.url + '/Usuarios.asmx/getPedidosDisponibles')
  }

  



}
