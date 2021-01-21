import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabproductosPageRoutingModule } from './tabproductos-routing.module';

import { TabproductosPage } from './tabproductos.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabproductosPageRoutingModule,
  
  ],
  declarations: [TabproductosPage]
})
export class TabproductosPageModule {}
