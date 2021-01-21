import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabcategoriasPage } from './tabcategorias.page';

const routes: Routes = [
  {
    path: '',
    component: TabcategoriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabcategoriasPageRoutingModule {}
