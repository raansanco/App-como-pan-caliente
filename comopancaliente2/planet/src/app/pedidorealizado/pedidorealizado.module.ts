import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidorealizadoPageRoutingModule } from './pedidorealizado-routing.module';

import { PedidorealizadoPage } from './pedidorealizado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidorealizadoPageRoutingModule
  ],
  declarations: [PedidorealizadoPage]
})
export class PedidorealizadoPageModule {}
