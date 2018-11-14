import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, Alert } from 'ionic-angular';
import { Http } from '@angular/http';
import { UsuariosServiceProvider } from '../../providers/usuarios-service';
import { Articulos } from '../../shared/model/articulos';
import { Areas } from '../../shared/model/areas';
import { UrlServiceProvider } from '../../providers/url-service';
import { AreasProvider } from '../../providers/areas-service';
import { Geolocation } from '@ionic-native/geolocation';
import { PedidosServiceProvider } from '../../providers/pedidos-service'
import { ClientesServiceProvider } from '../../providers/clientes-service';
import { Clienteperfil } from '../../shared/model/clientePerfil';

/**
 * Generated class for the PedidoArregloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedido-arreglo',
  templateUrl: 'pedido-arreglo.html',
})
export class PedidoArregloPage {

  public objectJson: Array<Areas>
  public artAreas: Array<Articulos>
  users: any[] = []
  loading: Loading;
  public url: string;//variable que contiene la url d edonde estan colgados los ws
  public urlWs: UrlServiceProvider;
  public myVal: string;
  userService: UsuariosServiceProvider;
  areaSeleccionada: number
  articuloSeleccionado: number
  areasServicio: AreasProvider;
  pedidoServicio: PedidosServiceProvider;
  public domic: number;
  calle: string;
  calleN: string;
  CP: string;
  localidad: string;
  provincia: string;
  descripcionProb: string;
  clienteService: ClientesServiceProvider;
  horario: string;
  Pais: string;
  public perfilJson: Array<Clienteperfil>;
  constructor(public navCtrl: NavController, private http: Http,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    //  private geolocation: Geolocation,
    urlWs2: UrlServiceProvider, usuarioService: UsuariosServiceProvider,
    areasServicio2: AreasProvider, private geolocation: Geolocation,
    pedidoServicio2: PedidosServiceProvider,
    clienteService2: ClientesServiceProvider) {
    this.urlWs = urlWs2;
    this.userService = usuarioService
    this.areasServicio = areasServicio2;
    this.pedidoServicio = pedidoServicio2;
    this.clienteService = clienteService2;
    this.GetAreasALL();

  }


  GetAreasALL() {

    this.areasServicio.GetAreasALLS()
      .subscribe(res => {

        this.myVal = (res.text());
        let posts = JSON.stringify(this.myVal);
        posts = this.myVal.replace('<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<string xmlns=\"http://tempuri.org/\">', "")
        posts = posts.replace('</string>', "")
        posts = posts.replace('}</string>', "")
        this.objectJson = JSON.parse(posts);

      }
      ), (error) => {

      }

  }

  cambiarArticulo($event) {

    this.url = this.urlWs.getUrl();

    this.areasServicio.getArticulosByAreas(this.areaSeleccionada)
      .subscribe(res => {

        this.myVal = (res.text());
        let posts = JSON.stringify(this.myVal);
        posts = this.myVal.replace('<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<string xmlns=\"http://tempuri.org/\">', "")
        posts = posts.replace('</string>', "")
        posts = posts.replace('}</string>', "")
        this.artAreas = JSON.parse(posts);

      }
      ), (error) => {

      }

  }
  registrarPedido() {
    var latitud = 0;
    var longitud = 0;

    if (this.areaSeleccionada == undefined) {
      alert("Tiene que seleccionar un AREA.")
      return;
    }
    if (this.articuloSeleccionado == undefined) {
      alert("Tiene que seleccionar un ARTICULO.")
      return;
    }


    if (this.domic != 1) {
      if (this.calle == "") {
        alert("Tiene que ingresar una CALLE")
        return;

      }
      if (this.calleN == "") {
        alert("Tiene que ingresar un Nº DE CALLE")
        return;

      }

      if (this.CP == "") {
        alert("Tiene que ingresar un CODIGO POSTAL")
        return;

      }
      if (this.localidad == "") {
        alert("Tiene que ingresar una LOCALIDAD")
        return;

      }
      if (this.provincia == "") {
        alert("Tiene que ingresar una PROVINCIA")
        return;

      }
      if (this.Pais == "") {
        alert("Tiene que ingresar un PAIS")
        return;

      }
    }
    if (this.horario == "") {
      alert("Tiene que ingresar una HORARIO DISPONIBLE")
      return;

    }

    var options = { enableHighAccuracy: true };
    //navigator.geolocation.getCurrentPosition(onSuccess, onError);
    var cliente = this.userService.clienteID;

    this.geolocation.getCurrentPosition().then((resp) => {

      if (this.domic == 1)//domicilio cargado en cliente
      {
        alert(resp.coords.latitude)
        alert(resp.coords.longitude)
        this.clienteService.getClienteperfil(this.userService.clienteID).subscribe(
          res => {
            this.myVal = (res.text());
            let posts = JSON.stringify(this.myVal);
            posts = this.myVal.replace('<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<string xmlns=\"http://tempuri.org/\">', "")
            posts = posts.replace('</string>', "")
            posts = posts.replace('}</string>', "")
            this.perfilJson = JSON.parse(posts)

            this.pedidoServicio.InsPedido(this.userService.clienteID,
              this.perfilJson[0].ClienteID, this.perfilJson[0].DomicilioID, this.articuloSeleccionado, this.calleN, this.CP,
              this.localidad, this.provincia,
              this.Pais, this.descripcionProb, this.horario, resp.coords.latitude, resp.coords.longitude, this.areaSeleccionada).subscribe(
                res => {

                  alert("Solicitud Enviada. un tecnico se comunicara con Ud.")
                }
              )
          });
      } else {

        this.pedidoServicio.InsPedido(this.userService.clienteID,
          0, this.areaSeleccionada, this.calle, this.calleN, this.CP,
          this.localidad, this.provincia,
          this.Pais, this.descripcionProb, this.horario, 0, 0, this.areaSeleccionada).subscribe(
            res => {

              alert("Solicitud Enviada. un tecnico se comunicara con Ud.")
            }
          )
      }


    }).catch((error) => {
      console.log('Error getting location', error);
    });




  }



  /*  showLoading() {
       this.loading = this.loadingCtrl.create({
         content: 'Por favor espere, enviando solicitud'
       });
       this.loading.present();
     }*/

}
