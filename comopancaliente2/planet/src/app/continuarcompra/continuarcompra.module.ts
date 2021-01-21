import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContinuarcompraPageRoutingModule } from './continuarcompra-routing.module';

import { ContinuarcompraPage } from './continuarcompra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContinuarcompraPageRoutingModule
  ],
  declarations: [ContinuarcompraPage]
})
export class ContinuarcompraPageModule {}
