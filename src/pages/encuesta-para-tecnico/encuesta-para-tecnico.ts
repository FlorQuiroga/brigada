import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController, Loading } from 'ionic-angular';
import { UsuariosServiceProvider } from '../../providers/usuarios-service';
import { UrlServiceProvider } from '../../providers/url-service';
import { Http } from '@angular/http';
import { ClientesServiceProvider } from '../../providers/clientes-service';
import { TecnicosServiceProvider } from '../../providers/tecnicos-service';
import { Cliente } from '../../shared/model/cliente';
/**
 * Generated class for the EncuestaParaTecnicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encuesta-para-tecnico',
  templateUrl: 'encuesta-para-tecnico.html',
})
export class EncuestaParaTecnicoPage {
  public url: string;//variable que contiene la url d edonde estan colgados los ws
  public urlWs: UrlServiceProvider;
  public myVal: string;
  userService: UsuariosServiceProvider;
  clientesSeleccionado: number;

  public calificacion: number;
  public txtarea: string;
  public clienteJson: Array<Cliente>;
  clienteService: ClientesServiceProvider;
  tecnicoService: TecnicosServiceProvider

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http: Http, urlWs2: UrlServiceProvider,
    usuarioService: UsuariosServiceProvider, clienteService2: ClientesServiceProvider,
    tecnicoService2: TecnicosServiceProvider) {
    this.urlWs = urlWs2;
    this.userService = usuarioService
    this.clienteService = clienteService2;
    this.tecnicoService = tecnicoService2;
    this.getClienteAll();
  }


  getClienteAll() {
    this.clienteService.getClienteAll()
      .subscribe(

        res => {

          this.myVal = (res.text());
          let posts = JSON.stringify(this.myVal);
          posts = this.myVal.replace('<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<string xmlns=\"http://tempuri.org/\">', "")
          posts = posts.replace('</string>', "")
          posts = posts.replace('}</string>', "")
          this.clienteJson = JSON.parse(posts);

        }
      )

  }
  
  calificaCliente() {
    //insertarEncuesta(tecnico,calificacion,descripcion,clienteid)
    this.clienteService.insertarEncuesta(this.userService.tecnicoID, this.calificacion, this.txtarea, this.clientesSeleccionado).subscribe(
      res => {
        alert("Gracias por calificarnos!")
      }
    )
  }

}
