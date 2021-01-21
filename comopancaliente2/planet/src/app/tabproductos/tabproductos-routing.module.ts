import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabproductosPage } from './tabproductos.page';

const routes: Routes = [
  {
    path: '',
    component: TabproductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabproductosPageRoutingModule {}
