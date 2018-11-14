import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EncuestaParaClientePage } from './encuesta-para-cliente';

@NgModule({
  declarations: [
    EncuestaParaClientePage,
  ],
  imports: [
    IonicPageModule.forChild(EncuestaParaClientePage),
  ],
})
export class EncuestaParaClientePageModule {}
