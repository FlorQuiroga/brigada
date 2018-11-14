import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CierraPedidoTecnicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cierra-pedido-tecnico',
  templateUrl: 'cierra-pedido-tecnico.html',
})
export class CierraPedidoTecnicoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CierraPedidoTecnicoPage');
  }
  calificaCliente(){

    alert("Pedido 1 cerrado exitosamente.")
  }

}
