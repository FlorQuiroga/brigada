import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidosDisponibles } from '../../shared/model/pedidosDisponibles';
import { Tecnico } from '../../shared/model/Tecnico';
import { UrlServiceProvider } from '../../providers/url-service';
import { TecnicosServiceProvider } from '../../providers/tecnicos-service';
import { Http } from '@angular/http';
import { UsuariosServiceProvider } from '../../providers/usuarios-service';
import { PedidosServiceProvider } from '../../providers/pedidos-service';
/**
 * Generated class for the AsignarPedidoTecnicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asignar-pedido-tecnico',
  templateUrl: 'asignar-pedido-tecnico.html',
})
export class AsignarPedidoTecnicoPage {
  public url: string;//variable que contiene la url d edonde estan colgados los ws
  public urlWs: UrlServiceProvider;
  public myVal: string;
  tecnicoService: TecnicosServiceProvider;
  userService: UsuariosServiceProvider;
  pedidoService:PedidosServiceProvider;
  public tecnicosJson :Array<Tecnico>;

  public pedidoJson: Array<PedidosDisponibles>;
  tecnicoSeleccionado:number;
  pedidoseleccionado:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http: Http, urlWs2: UrlServiceProvider,
    usuarioService: UsuariosServiceProvider,
    tecnicoService2: TecnicosServiceProvider,
    pedidoService2:PedidosServiceProvider) {
    this.userService = usuarioService
    this.tecnicoService=tecnicoService2
    this.urlWs = urlWs2;
    this.pedidoService=pedidoService2;
    this.getPedidosDisponibles();
    this.GetecnicosALL();
  }

  //getPedidosDisponibles

  getPedidosDisponibles() {
    this.userService.getPedidosDisponibles()
      .subscribe(

        res => {

          this.myVal = (res.text());
          let posts = JSON.stringify(this.myVal);
          posts = this.myVal.replace('<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<string xmlns=\"http://tempuri.org/\">', "")
          posts = posts.replace('</string>', "")
          posts = posts.replace('}</string>', "")
          this.pedidoJson = JSON.parse(posts);

        }
      )
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

  asignaPedido(){
alert(this.pedidoseleccionado); 
alert(this.tecnicoSeleccionado);

this.pedidoService.PedidoTecnicoINS(this.pedidoseleccionado,this.tecnicoSeleccionado)
.subscribe(

  res => {
    alert("pedido asignado correctamente.")

  }
)



  }

}
