import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TomaPedidoTecnicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toma-pedido-tecnico',
  templateUrl: 'toma-pedido-tecnico.html',
})
export class TomaPedidoTecnicoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 
  calificaCliente(){
alert("Comenzó reparacion del pedido 2");

  }
}
