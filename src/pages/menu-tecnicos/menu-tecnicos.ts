import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { TomaPedidoTecnicoPage } from '../toma-pedido-tecnico/toma-pedido-tecnico';
import { CierraPedidoTecnicoPage } from '../cierra-pedido-tecnico/cierra-pedido-tecnico';
import { EncuestaParaTecnicoPage } from '../encuesta-para-tecnico/encuesta-para-tecnico';
import { UsuariosServiceProvider } from '../../providers/usuarios-service';
import { LoginPage } from '../login/login';
import { TecnicoPerfilPage } from '../tecnico-perfil/tecnico-perfil';
/**
 * Generated class for the MenuTecnicosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-tecnicos',
  templateUrl: 'menu-tecnicos.html',
})
export class MenuTecnicosPage {
  public tomaPedido;
  public cierraPedido;
  public encuestaTecnico;
  public miperfil;
  private rootPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public usuarioService: UsuariosServiceProvider,
    public platform: Platform) {
    this.tomaPedido = TomaPedidoTecnicoPage;
    this.cierraPedido = CierraPedidoTecnicoPage;
    this.rootPage = TomaPedidoTecnicoPage;
    this.encuestaTecnico = EncuestaParaTecnicoPage;
    this.miperfil = TecnicoPerfilPage;
  }


  salir() {
    console.log("Salio de la app");
    //limpia las sessiones de logueo.
    //Fquiroga
    window.localStorage.setItem("email", "");
    window.localStorage.setItem("pass", "");

    this.platform.exitApp();
    this.navCtrl.push(LoginPage);

  }
  openPage(p) {
    this.rootPage = p;
  }

}
