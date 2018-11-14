import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NavController, LoadingController, Loading, AlertController } from 'ionic-angular';
import { Http } from "@angular/http";

import { UsuariosServiceProvider } from '../../providers/usuarios-service';
import { MenuTecnicosPage } from '../menu-tecnicos/menu-tecnicos';
import { MenuClientePage } from '../menu-cliente/menu-cliente';
import { MenuAdministrativoPage } from '../menu-administrativo/menu-administrativo';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { NuevoClientePage } from '../nuevo-cliente/nuevo-cliente';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    loading: Loading;
    androidFingerprintAuth: AndroidFingerprintAuth;
    registerCredentials = { email: '', password: '' };
    data = { title: 'flor', description: 'flor', date: '01/11/2018', time: '18:24' };
    public userService: UsuariosServiceProvider;
    constructor(public navCtrl: NavController, public navParams: NavParams,
        private loadingCtrl: LoadingController, private http: Http,
        usuarioService: UsuariosServiceProvider,
        private androidFingerprintAuth2: AndroidFingerprintAuth,
        public alertCtrl: AlertController,
        public localNotifications: LocalNotifications
    ) {
        this.userService = usuarioService;
        this.androidFingerprintAuth = androidFingerprintAuth2;



        this.androidFingerprintAuth.isAvailable()
            .then((result) => {

                if (result.isAvailable) {
                    // it is available

                    this.androidFingerprintAuth.encrypt({ clientId: 'myAppName', username: 'myUsername', password: 'myPassword' })
                        .then(result => {
                            if (result.withFingerprint) {
                                //   alert("entri");
                                this.registerCredentials.email = 'flor';
                                this.registerCredentials.password = 'flor';
                                //   this.login()
                            } else if (result.withBackup) {
                                this.registerCredentials.email = 'pedro';
                                this.registerCredentials.password = 'pedro';
                                //      this.login2()
                            } else console.log('Didn\'t authenticate!');
                        })
                        .catch(error => {
                            if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
                                alert("NO")
                            } else console.error(error)
                        });

                } else {
                    // fingerprint auth isn't available
                }
            })
            .catch(error => console.error(error));
    }



    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }
    //LOGIN USUARIO
    public login() { 
if(this.registerCredentials.email="1"){

    this.navCtrl.setRoot(MenuClientePage);
}
else if(this.registerCredentials.email="2") {
    this.navCtrl.setRoot(MenuTecnicosPage);
}
else{
    this.navCtrl.setRoot(MenuAdministrativoPage);

}

    //  this.showLoading()
      /*  this.userService.ValidarUsuarioWS(this.registerCredentials.email, this.registerCredentials.password)
            .subscribe((logueado: boolean) => {
                //guarda como en session el nombre y pass, apra que no caduque la sesion del usuario
                window.localStorage.setItem("email", this.registerCredentials.email);
                window.localStorage.setItem("pass", this.registerCredentials.password);
                if (logueado) {
                    this.loading.setContent("Bienvenido " + this.userService.nombre + " " + this.userService.apellido + ".")

                    setTimeout(() => {
                    
                        if (this.userService.tecnicoID != 0) {
                            //ingresa al menu de los tecnicos

                            this.navCtrl.setRoot(MenuTecnicosPage);
                            this.loading.dismiss();


                        }
                        else if (this.userService.clienteID != 0) {
                            //menu de clientes
                            this.navCtrl.setRoot(MenuClientePage);

                            this.loading.dismiss();
                        }
                        else if (this.userService.usuarioID != 0) {
                        
                            this.navCtrl.setRoot(MenuAdministrativoPage);

                            this.loading.dismiss();
                        }


                    }, 1000);
                //    this.loading.dismiss();
                }
                else {
                    this.loading.dismiss();
                    alert("Usuario y/o Pass mal ingresado.");

                }
            },
                err => {

                    this.loading.dismiss();
                    alert("Usuario y/o Pass mal ingresado.");
                })*/
 
    }
    //muestra mensaje de espera.
    /* login3() {
         this.showLoading();
         this.loading.setContent("Bienvenido Nombre Tecnico.")
         this.navCtrl.setRoot(MenuTecnicosPage);
       this.loading.dismiss();
     }*/

    /*  login2(){
          this.showLoading();
          this.loading.setContent("Bienvenido Nombre Cliente.")
          this.navCtrl.setRoot(MenuClientePage);
        this.loading.dismiss();
  
      } */
    showLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Por favor espere...'
        });
        this.loading.present();
    }
    ingresoInvitado() {


    }

    nuevoCliente() {

        this.navCtrl.setRoot(NuevoClientePage);
        // this.loading.dismiss();
    }




}
