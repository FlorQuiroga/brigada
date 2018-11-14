import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http'; 
import { MyApp } from './app.component';

import {LoginPage} from '../pages/login/login';
import { UsuariosServiceProvider } from '../providers/usuarios-service';
import { UrlServiceProvider } from '../providers/url-service';
import {MenuTecnicosPage} from '../pages/menu-tecnicos/menu-tecnicos';
import{TomaPedidoTecnicoPage} from '../pages/toma-pedido-tecnico/toma-pedido-tecnico';
import{CierraPedidoTecnicoPage} from '../pages/cierra-pedido-tecnico/cierra-pedido-tecnico';
import{MenuClientePage} from '../pages/menu-cliente/menu-cliente';
import{NuevoClientePage} from '../pages/nuevo-cliente/nuevo-cliente';
import{EncuestaParaClientePage} from '../pages/encuesta-para-cliente/encuesta-para-cliente';
import{EncuestaParaTecnicoPage} from '../pages/encuesta-para-tecnico/encuesta-para-tecnico';
import{ReporteEncuestasPage} from '../pages/reporte-encuestas/reporte-encuestas';
import{PedidoArregloPage} from '../pages/pedido-arreglo/pedido-arreglo';
import { AreasProvider } from '../providers/areas-service';
import{HttpClientModule} from '@angular/common/http';
import { ClientesServiceProvider } from '../providers/clientes-service';
import { TecnicosServiceProvider } from '../providers/tecnicos-service';
import{ClientePerfilPage} from '../pages/cliente-perfil/cliente-perfil'
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
import { PedidosServiceProvider } from '../providers/pedidos-service';
import{TecnicoPerfilPage} from '../pages/tecnico-perfil/tecnico-perfil';
import {LocalNotifications} from '@ionic-native/local-notifications';
import{MenuAdministrativoPage} from '../pages/menu-administrativo/menu-administrativo';
import{AsignarPedidoTecnicoPage} from '../pages/asignar-pedido-tecnico/asignar-pedido-tecnico';
 
 
@NgModule({ 
  declarations: [
    MyApp,
    //HomePage,
    LoginPage,MenuTecnicosPage,TomaPedidoTecnicoPage,
    CierraPedidoTecnicoPage,MenuClientePage,NuevoClientePage,
    EncuestaParaClientePage,EncuestaParaTecnicoPage,ReporteEncuestasPage,
    PedidoArregloPage,ClientePerfilPage,TecnicoPerfilPage,MenuAdministrativoPage,
    AsignarPedidoTecnicoPage
  ],
  
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,LoginPage ,MenuTecnicosPage,TomaPedidoTecnicoPage,
    CierraPedidoTecnicoPage,MenuClientePage,NuevoClientePage,
    EncuestaParaClientePage,EncuestaParaTecnicoPage,ReporteEncuestasPage,
    PedidoArregloPage,ClientePerfilPage,TecnicoPerfilPage,MenuAdministrativoPage
,AsignarPedidoTecnicoPage
    //HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuariosServiceProvider,
    UrlServiceProvider,
    AreasProvider,
    ClientesServiceProvider,
    TecnicosServiceProvider,AndroidFingerprintAuth,
    PedidosServiceProvider,Geolocation,LocalNotifications
  ]
})
export class AppModule {}
