import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinuarcompraPage } from './continuarcompra.page';

const routes: Routes = [
  {
    path: '',
    component: ContinuarcompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContinuarcompraPageRoutingModule {}
