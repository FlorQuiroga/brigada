import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AsignarPedidoTecnicoPage } from '../asignar-pedido-tecnico/asignar-pedido-tecnico';
import { UsuariosServiceProvider } from '../../providers/usuarios-service';
import { LoginPage } from '../login/login';
import { ClientePerfilPage } from '../cliente-perfil/cliente-perfil';
/**
 * Generated class for the MenuAdministrativoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({

  selector: 'page-menu-administrativo',
  templateUrl: 'menu-administrativo.html',
  
})
export class MenuAdministrativoPage {

  public pedidoTecnico;
  public rootPage;
  public cliente;
  public nombre;
  public apellido;
  userService: UsuariosServiceProvider;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public usuarioService2: UsuariosServiceProvider,
    public platform: Platform) {

    this.userService = usuarioService2
    this.pedidoTecnico = AsignarPedidoTecnicoPage;//inserta pedido
    this.cliente = ClientePerfilPage;
    this.rootPage = AsignarPedidoTecnicoPage;
this.nombre=this.userService.nombre;
this.apellido=this.userService.apellido;
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuAdministrativoPage');
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
