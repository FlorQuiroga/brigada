import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuariosServiceProvider } from '../../providers/usuarios-service';
import { TecnicosServiceProvider } from '../../providers/tecnicos-service';
import { TecnicoPerfil } from '../../shared/model/tecnicoPerfil';

/**
 * Generated class for the TecnicoPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tecnico-perfil',
  templateUrl: 'tecnico-perfil.html',
})
export class TecnicoPerfilPage {

  tecnicoService: TecnicosServiceProvider;
  userService: UsuariosServiceProvider;
  imagen1: string;
  imagen2: string;
  registerCredentials = {
    nombre: '',
    apellido: '',
    nroCliente: 0,
    email: '',
    telefono: '',
    documento: '',
    domicilioID: 0,
    calle: '',
    calleN: '',
    CP: '',
    localidad: '',
    provincia: '',
    pais: '',tipodoc:'',nrodoc:''
  }
  myVal: string;
  public perfilJson: Array<TecnicoPerfil>;
  tecnicoid:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    usuarioService2: UsuariosServiceProvider, tecnicoService2: TecnicosServiceProvider) {
    this.userService = usuarioService2;
    this.tecnicoService = tecnicoService2;
    this.getperfil();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TecnicoPerfilPage');
  }
  getperfil() {

    this.tecnicoService.getTecnicoperfil(this.userService.tecnicoID).subscribe
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
        this.imagen2 = this.perfilJson[0].Imagen2
        this.registerCredentials.domicilioID = this.perfilJson[0].DomicilioID;
        this.imagen1 = this.perfilJson[0].Imagen1;
        this.registerCredentials.tipodoc=this.perfilJson[0].TipoDocumento;
        this.registerCredentials.nrodoc=this.perfilJson[0].NroDocumento;
        this.tecnicoid=this.perfilJson[0].TecnicoID;
      }
      )

  }


  ModificarPerfil() {

    this.tecnicoService.updateTecnicoperfil(this.registerCredentials.nombre, 
      this.registerCredentials.apellido, this.registerCredentials.email,
      this.registerCredentials.telefono, this.imagen1, this.imagen2,
       this.registerCredentials.calle, this.registerCredentials.calleN, 
       this.registerCredentials.CP, this.registerCredentials.localidad, this.registerCredentials.provincia, this.registerCredentials.pais,
      this.tecnicoid, this.registerCredentials.domicilioID,this.registerCredentials.tipodoc,this.registerCredentials.nrodoc).subscribe(
        res => {

          alert("Cliente Actualizado");
        }

      )
  }
}
