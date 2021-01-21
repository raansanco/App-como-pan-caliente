import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidorealizadoPage } from './pedidorealizado.page';

const routes: Routes = [
  {
    path: '',
    component: PedidorealizadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidorealizadoPageRoutingModule {}
