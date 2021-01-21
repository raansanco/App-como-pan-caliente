import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoagregadoPage } from './productoagregado.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoagregadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoagregadoPageRoutingModule {}
