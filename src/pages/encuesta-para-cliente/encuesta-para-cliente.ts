import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { UsuariosServiceProvider } from '../../providers/usuarios-service';
import { UrlServiceProvider } from '../../providers/url-service';
import { Tecnico } from '../../shared/model/tecnico';
import { Http } from '@angular/http';
import { ClientesServiceProvider } from '../../providers/clientes-service';
import { TecnicosServiceProvider } from '../../providers/tecnicos-service';
/**
 * Generated class for the EncuestaParaClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encuesta-para-cliente',
  templateUrl: 'encuesta-para-cliente.html',
})
export class EncuestaParaClientePage {

  public url: string;//variable que contiene la url d edonde estan colgados los ws
  public urlWs: UrlServiceProvider;
  public myVal: string;
  userService: UsuariosServiceProvider;
  tecnicoSeleccionado: number;

  public calificacion: number;
  public txtarea: string;
  public tecnicosJson: Array<Tecnico>;
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
    this.GetecnicosALL();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EncuestaParaClientePage');
  }

  GetecnicosALL() {
    this.tecnicoService.getTecnicosAll()
      .subscribe(

        res => {

          this.myVal = (res.text());
          let posts = JSON.stringify(this.myVal);
          posts = this.myVal.replace('<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<string xmlns=\"http://tempuri.org/\">', "")
          posts = posts.replace('</string>', "")
          posts = posts.replace('}</string>', "")
          this.tecnicosJson = JSON.parse(posts);

        }
      ) 

  }

  calificaTecnico() {
    alert("Gracias por calificarnos!")
  }
  calificaTecnico2() {
    //insertarEncuesta(tecnico,calificacion,descripcion,clienteid)
    this.clienteService.insertarEncuesta(this.tecnicoSeleccionado, this.calificacion, this.txtarea, this.userService.clienteID).subscribe(
      res => {
        alert("Gracias por calificarnos!")
      }
    )
  }

}
