import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuAdministrativoPage } from './menu-administrativo';

@NgModule({
  declarations: [
    MenuAdministrativoPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuAdministrativoPage),
  ],
})
export class MenuAdministrativoPageModule {}
