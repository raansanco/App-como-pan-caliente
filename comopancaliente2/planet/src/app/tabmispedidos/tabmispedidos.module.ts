import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabmispedidosPageRoutingModule } from './tabmispedidos-routing.module';

import { TabmispedidosPage } from './tabmispedidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabmispedidosPageRoutingModule
  ],
  declarations: [TabmispedidosPage]
})
export class TabmispedidosPageModule {}
