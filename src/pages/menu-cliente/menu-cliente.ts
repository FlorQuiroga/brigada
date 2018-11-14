import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { UsuariosServiceProvider } from '../../providers/usuarios-service';
import { LoginPage } from '../login/login';
import { PedidoArregloPage } from '../pedido-arreglo/pedido-arreglo';
import { EncuestaParaClientePage } from '../encuesta-para-cliente/encuesta-para-cliente';
import { ClientePerfilPage } from '../cliente-perfil/cliente-perfil';
/**
 * Generated class for the MenuClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-cliente',
  templateUrl: 'menu-cliente.html',
})
export class MenuClientePage {
  public pedido;
  public cierraPedido;
  public encuestaTecnico;
  public rootPage;
  public miperfil;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public usuarioService: UsuariosServiceProvider,
    public platform: Platform) {
    this.pedido = PedidoArregloPage;//inserta pedido
    this.rootPage = EncuestaParaClientePage;//es la pantalla principal
    this.encuestaTecnico = EncuestaParaClientePage;//encuesta para que el cliente califique al tecncio
    this.miperfil = ClientePerfilPage;//pantalla mi perfil
  }


  openPage(p) {
    this.rootPage = p;
  }

  salir() {
    console.log("Salio de la app");
    //limpia las sessiones de logueo.
    window.localStorage.setItem("email", "");
    window.localStorage.setItem("pass", "");

    this.platform.exitApp();
    this.navCtrl.push(LoginPage);

  }


}
