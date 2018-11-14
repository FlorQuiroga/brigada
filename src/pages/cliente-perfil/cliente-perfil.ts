import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuariosServiceProvider } from '../../providers/usuarios-service';
import { ClientesServiceProvider } from '../../providers/clientes-service';
import { Clienteperfil } from '../../shared/model/clientePerfil';

/**
 * Generated class for the ClientePerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente-perfil',
  templateUrl: 'cliente-perfil.html',
})
export class ClientePerfilPage {
  userService: UsuariosServiceProvider;
  clienteService: ClientesServiceProvider;
 
  registerCredentials = { nombre: '',
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
    pais: '',tipoDoc:'',nroDoc:''}
  myVal: string;
  public perfilJson: Array<Clienteperfil>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    usuarioService2: UsuariosServiceProvider, clienteService2: ClientesServiceProvider) {
    this.userService = usuarioService2
    this.clienteService = clienteService2;

    this.getperfil();

  }

  getperfil() {
    //alert(this.userService.clienteID);
   
    this.clienteService.getClienteperfil(this.userService.clienteID).subscribe
      (
      res => {
        this.myVal = (res.text());
        let posts = JSON.stringify(this.myVal);
        posts = this.myVal.replace('<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<string xmlns=\"http://tempuri.org/\">', "")
        posts = posts.replace('</string>', "")
        posts = posts.replace('}</string>', "")
        this.perfilJson = JSON.parse(posts);

        this.registerCredentials.nombre = this.perfilJson[0].Nombre;
        this.registerCredentials.apellido = this.perfilJson[0].Apellido;
        this.registerCredentials.telefono = this.perfilJson[0].Telefono;
        this.registerCredentials.email = this.perfilJson[0].Mail;
        this.registerCredentials.calle = this.perfilJson[0].Calle;
        this.registerCredentials.calleN = this.perfilJson[0].CalleNro;
        this.registerCredentials.CP = this.perfilJson[0].CodigoPostal;
        this.registerCredentials.localidad = this.perfilJson[0].Localidad, 
        this.registerCredentials.provincia = this.perfilJson[0].Provincia;
        this.registerCredentials.pais = this.perfilJson[0].Pais;
        this.registerCredentials.factura = this.perfilJson[0].TipoFactura
        this.registerCredentials.domicilioID = this.perfilJson[0].DomicilioID;
        this.registerCredentials.razonSocial=this.perfilJson[0].RazonSocial;
        this.registerCredentials.tipoDoc=this.perfilJson[0].TipoDocumento;
        this.registerCredentials.nroDoc=this.perfilJson[0].NroDocumento;
      }



      )

  }
  ModificarPerfil() {
  this.clienteService.updateClienteperfil(this.registerCredentials.nombre, this.registerCredentials.apellido, this.registerCredentials.email,
      this.registerCredentials.telefono, this.registerCredentials.razonSocial, this.registerCredentials.factura, this.registerCredentials.calle, this.registerCredentials.calleN, this.registerCredentials.CP, this.registerCredentials.localidad, this.registerCredentials.provincia, this.registerCredentials.pais,
      this.userService.clienteID, this.registerCredentials.domicilioID).subscribe(
        res => {

          alert("Datos modificados.");
        }  

      )
      //alert("Cliente Actualizado");
   }


}
