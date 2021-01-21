import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabcategoriasPageRoutingModule } from './tabcategorias-routing.module';

import { TabcategoriasPage } from './tabcategorias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabcategoriasPageRoutingModule
  ],
  declarations: [TabcategoriasPage]
})
export class TabcategoriasPageModule {}
