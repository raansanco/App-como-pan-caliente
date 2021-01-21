import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoagregadoPageRoutingModule } from './productoagregado-routing.module';

import { ProductoagregadoPage } from './productoagregado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoagregadoPageRoutingModule
  ],
  declarations: [ProductoagregadoPage]
})
export class ProductoagregadoPageModule {}
