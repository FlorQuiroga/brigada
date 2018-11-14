import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuariosServiceProvider } from '../../providers/usuarios-service';
import { ClientesServiceProvider } from '../../providers/clientes-service';
import {LoginPage} from '../login/login';
/**
 * Generated class for the NuevoClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@IonicPage()
@Component({
  selector: 'page-nuevo-cliente',
  templateUrl: 'nuevo-cliente.html',
})
export class NuevoClientePage {
  userService: UsuariosServiceProvider;
  clienteService: ClientesServiceProvider;
  registerCredentials = {
    nombre: '',
    apellido: '',
    nroCliente: 0,
    email: '',
    telefono: '',
    documento: '',
    razonSocial: '',
    domicilioID: 0,
    factura: '',
    calle: '',
    calleN: '',
    CP: '',
    localidad: '',
    provincia: '',
    pais: '', nroDoc: '',tipoDoc:''
  }
  myVal: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    usuarioService2: UsuariosServiceProvider, clienteService2: ClientesServiceProvider) {
    this.userService = usuarioService2
    this.clienteService = clienteService2;
  }


  NuevoCliente() {
   

    this.clienteService.insertarCliente(this.registerCredentials.nombre,
      this.registerCredentials.apellido,
      this.registerCredentials.email,
      this.registerCredentials.telefono,
      this.registerCredentials.razonSocial,
      this.registerCredentials.factura,
      this.registerCredentials.calle,
      this.registerCredentials.calleN,
      this.registerCredentials.CP,
      this.registerCredentials.localidad,
      this.registerCredentials.provincia,
      this.registerCredentials.pais,
      this.registerCredentials.tipoDoc,
      this.registerCredentials.nroDoc  
).subscribe(
        res => {
          alert("Usted se registro corectamente. Por favor verifique su casilla de correo.");
          this.navCtrl.setRoot(LoginPage);
        }

      )
  }

}
