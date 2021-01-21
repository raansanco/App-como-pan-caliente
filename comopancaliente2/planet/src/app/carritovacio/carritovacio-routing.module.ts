import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarritovacioPage } from './carritovacio.page';

const routes: Routes = [
  {
    path: '',
    component: CarritovacioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarritovacioPageRoutingModule {}
